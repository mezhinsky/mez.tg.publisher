import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Telegraf, Input } from 'telegraf';

export interface SendMessageOptions {
  chatId: string;
  text: string;
  parseMode?: 'HTML' | 'Markdown' | 'MarkdownV2';
  disableWebPagePreview?: boolean;
  disableNotification?: boolean;
}

export interface SendMessageResult {
  messageId: number;
  chatId: string | number;
}

export interface SendPhotoOptions {
  chatId: string;
  photoUrl: string;
  caption?: string;
  parseMode?: 'HTML' | 'Markdown' | 'MarkdownV2';
}

export interface SendMediaGroupOptions {
  chatId: string;
  mediaUrls: string[];
  caption?: string;
  parseMode?: 'HTML' | 'Markdown' | 'MarkdownV2';
}

export interface SendMediaGroupResult {
  messageIds: number[];
  chatId: string | number;
}

@Injectable()
export class TelegramService implements OnModuleInit {
  private readonly logger = new Logger(TelegramService.name);
  private bot: Telegraf;
  private isInitialized = false;
  private strictInit = false;
  private mediaUrlRewriteFrom?: string;
  private mediaUrlRewriteTo?: string;

  constructor(private readonly configService: ConfigService) {}

  async onModuleInit() {
    const token = this.configService.get<string>('telegram.botToken');
    this.strictInit = this.configService.get<boolean>('telegram.strictInit') ?? false;
    this.mediaUrlRewriteFrom =
      this.configService.get<string>('media.urlRewriteFrom') || undefined;
    this.mediaUrlRewriteTo =
      this.configService.get<string>('media.urlRewriteTo') || undefined;

    if (!token) {
      this.logger.warn(
        'TELEGRAM_BOT_TOKEN not set. Telegram integration disabled.',
      );
      return;
    }

    this.bot = new Telegraf(token);

    try {
      const botInfo = await this.bot.telegram.getMe();
      this.isInitialized = true;
      this.logger.log(`Telegram bot initialized: @${botInfo.username}`);
    } catch (error) {
      this.logger.error('Failed to initialize Telegram bot:', error);
      if (this.strictInit) {
        throw error;
      }
      this.logger.warn(
        'Telegram integration disabled (set TELEGRAM_STRICT_INIT=true to fail fast).',
      );
      this.isInitialized = false;
    }
  }

  /**
   * Check if the bot is properly initialized
   */
  isReady(): boolean {
    return this.isInitialized;
  }

  /**
   * Send a text message to a chat
   */
  async sendMessage(options: SendMessageOptions): Promise<SendMessageResult> {
    if (!this.isReady()) {
      throw new Error('Telegram bot not initialized');
    }

    const {
      chatId,
      text,
      parseMode = 'HTML',
      disableWebPagePreview,
      disableNotification,
    } = options;

    this.logger.debug(`Sending message to ${chatId}`);

    const result = await this.bot.telegram.sendMessage(chatId, text, {
      parse_mode: parseMode,
      link_preview_options: disableWebPagePreview
        ? { is_disabled: true }
        : undefined,
      disable_notification: disableNotification,
    });

    return {
      messageId: result.message_id,
      chatId: result.chat.id,
    };
  }

  /**
   * Send a photo with caption to a chat
   */
  async sendPhoto(options: SendPhotoOptions): Promise<SendMessageResult> {
    if (!this.isReady()) {
      throw new Error('Telegram bot not initialized');
    }

    const { chatId, photoUrl, caption, parseMode = 'HTML' } = options;

    this.logger.debug(`Sending photo to ${chatId}`);

    const direct = this.shouldUploadInsteadOfUrl(photoUrl)
      ? null
      : photoUrl;

    if (direct) {
      try {
        const result = await this.bot.telegram.sendPhoto(chatId, direct, {
          caption,
          parse_mode: parseMode,
        });

        return {
          messageId: result.message_id,
          chatId: result.chat.id,
        };
      } catch (error) {
        if (!this.isTelegramRemoteFetchError(error)) {
          throw error;
        }
        this.logger.warn(
          `Telegram failed to fetch photo by URL, falling back to upload: ${photoUrl}`,
        );
      }
    }

    const { buffer, filename } = await this.fetchImage(photoUrl);
    const result = await this.bot.telegram.sendPhoto(
      chatId,
      Input.fromBuffer(buffer, filename),
      { caption, parse_mode: parseMode },
    );

    return {
      messageId: result.message_id,
      chatId: result.chat.id,
    };
  }

  /**
   * Send a media group (album) with multiple photos
   * Caption is only shown on the first photo
   */
  async sendMediaGroup(
    options: SendMediaGroupOptions,
  ): Promise<SendMediaGroupResult> {
    if (!this.isReady()) {
      throw new Error('Telegram bot not initialized');
    }

    const { chatId, mediaUrls, caption, parseMode = 'HTML' } = options;

    if (mediaUrls.length === 0) {
      throw new Error('mediaUrls must contain at least one URL');
    }

    if (mediaUrls.length > 10) {
      throw new Error(
        'mediaUrls cannot contain more than 10 items (Telegram limit)',
      );
    }

    this.logger.debug(
      `Sending media group (${mediaUrls.length} photos) to ${chatId}`,
    );

    const canSendByUrl = mediaUrls.every((u) => !this.shouldUploadInsteadOfUrl(u));

    if (canSendByUrl) {
      try {
        const media = mediaUrls.map((url, index) => ({
          type: 'photo' as const,
          media: url,
          // Caption only on the first photo
          ...(index === 0 && caption ? { caption, parse_mode: parseMode } : {}),
        }));

        const results = await this.bot.telegram.sendMediaGroup(chatId, media);

        return {
          messageIds: results.map((msg) => msg.message_id),
          chatId: results[0].chat.id,
        };
      } catch (error) {
        if (!this.isTelegramRemoteFetchError(error)) {
          throw error;
        }
        this.logger.warn(
          `Telegram failed to fetch media group by URL, falling back to upload (${mediaUrls.length} items)`,
        );
      }
    }

    const uploaded = await Promise.all(
      mediaUrls.map(async (url) => {
        const { buffer, filename } = await this.fetchImage(url);
        return Input.fromBuffer(buffer, filename);
      }),
    );

    const media = uploaded.map((file, index) => ({
      type: 'photo' as const,
      media: file,
      ...(index === 0 && caption ? { caption, parse_mode: parseMode } : {}),
    }));

    const results = await this.bot.telegram.sendMediaGroup(chatId, media);

    return {
      messageIds: results.map((msg) => msg.message_id),
      chatId: results[0].chat.id,
    };
  }

  private isTelegramRemoteFetchError(error: unknown): boolean {
    const message = error instanceof Error ? error.message : String(error);
    return (
      message.includes('wrong type of the web page content') ||
      message.includes('failed to get HTTP URL content') ||
      message.includes('WEBPAGE_CURL_FAILED') ||
      message.includes('Bad Request')
    );
  }

  private shouldUploadInsteadOfUrl(url: string): boolean {
    try {
      const parsed = new URL(url);
      // Telegram can't reach localhost / loopback; prefer uploading from server-side fetch.
      if (
        parsed.hostname === 'localhost' ||
        parsed.hostname === '127.0.0.1' ||
        parsed.hostname === '0.0.0.0'
      ) {
        return true;
      }
    } catch {
      // If it isn't a valid URL, Telegram won't fetch it anyway.
      return true;
    }

    if (this.mediaUrlRewriteFrom && this.mediaUrlRewriteTo) {
      return url.startsWith(this.mediaUrlRewriteFrom);
    }

    return false;
  }

  private rewriteUrlForFetch(url: string): string {
    if (this.mediaUrlRewriteFrom && this.mediaUrlRewriteTo) {
      if (url.startsWith(this.mediaUrlRewriteFrom)) {
        return `${this.mediaUrlRewriteTo}${url.slice(this.mediaUrlRewriteFrom.length)}`;
      }
    }
    return url;
  }

  private async fetchImage(
    url: string,
  ): Promise<{ buffer: Buffer; filename: string }> {
    const rewritten = this.rewriteUrlForFetch(url);
    this.logger.debug(`Fetching media for upload: ${rewritten}`);

    const response = await fetch(rewritten, { redirect: 'follow' });
    if (!response.ok) {
      throw new Error(`Failed to fetch media (${response.status})`);
    }

    const contentType = response.headers.get('content-type') || '';
    if (!contentType.toLowerCase().startsWith('image/')) {
      throw new Error(
        `Fetched media is not an image (content-type: ${contentType || 'n/a'})`,
      );
    }

    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Best-effort filename for Telegram upload.
    let filename = 'image';
    try {
      const u = new URL(rewritten);
      const last = u.pathname.split('/').filter(Boolean).pop();
      if (last) filename = last;
    } catch {
      // ignore
    }
    if (!filename.includes('.')) {
      const ext = contentType.split('/')[1]?.split(';')[0]?.trim();
      if (ext) filename = `${filename}.${ext}`;
      else filename = `${filename}.jpg`;
    }

    return { buffer, filename };
  }

  /**
   * Edit a message's text
   */
  async editMessage(
    chatId: string,
    messageId: number,
    text: string,
    parseMode: 'HTML' | 'Markdown' | 'MarkdownV2' = 'HTML',
  ): Promise<boolean> {
    if (!this.isReady()) {
      throw new Error('Telegram bot not initialized');
    }

    try {
      await this.bot.telegram.editMessageText(
        chatId,
        messageId,
        undefined,
        text,
        {
          parse_mode: parseMode,
        },
      );
      return true;
    } catch (error) {
      this.logger.error(
        `Failed to edit message ${messageId} in ${chatId}:`,
        error,
      );
      throw error;
    }
  }

  /**
   * Edit a message's caption (e.g. photo or media-group first item)
   */
  async editMessageCaption(
    chatId: string,
    messageId: number,
    caption: string,
    parseMode: 'HTML' | 'Markdown' | 'MarkdownV2' = 'HTML',
  ): Promise<boolean> {
    if (!this.isReady()) {
      throw new Error('Telegram bot not initialized');
    }

    try {
      await this.bot.telegram.editMessageCaption(
        chatId,
        messageId,
        undefined,
        caption,
        { parse_mode: parseMode },
      );
      return true;
    } catch (error) {
      this.logger.error(
        `Failed to edit message caption ${messageId} in ${chatId}:`,
        error,
      );
      throw error;
    }
  }

  /**
   * Delete a message
   */
  async deleteMessage(chatId: string, messageId: number): Promise<boolean> {
    if (!this.isReady()) {
      throw new Error('Telegram bot not initialized');
    }

    try {
      await this.bot.telegram.deleteMessage(chatId, messageId);
      return true;
    } catch (error) {
      this.logger.error(
        `Failed to delete message ${messageId} in ${chatId}:`,
        error,
      );
      throw error;
    }
  }

  /**
   * Get channel/chat info
   */
  async getChat(chatId: string) {
    if (!this.isReady()) {
      throw new Error('Telegram bot not initialized');
    }

    return this.bot.telegram.getChat(chatId);
  }

  /**
   * Build the public URL for a message in a channel
   */
  buildMessageUrl(username: string, messageId: number): string {
    return `https://t.me/${username}/${messageId}`;
  }
}
