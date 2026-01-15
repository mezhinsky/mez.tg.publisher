import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Telegraf } from 'telegraf';
import { Message } from 'telegraf/types';

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

  constructor(private readonly configService: ConfigService) {}

  async onModuleInit() {
    const token = this.configService.get<string>('telegram.botToken');

    if (!token) {
      this.logger.warn('TELEGRAM_BOT_TOKEN not set. Telegram integration disabled.');
      return;
    }

    this.bot = new Telegraf(token);

    try {
      const botInfo = await this.bot.telegram.getMe();
      this.isInitialized = true;
      this.logger.log(`Telegram bot initialized: @${botInfo.username}`);
    } catch (error) {
      this.logger.error('Failed to initialize Telegram bot:', error);
      throw error;
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

    const { chatId, text, parseMode = 'HTML', disableWebPagePreview, disableNotification } = options;

    this.logger.debug(`Sending message to ${chatId}`);

    const result = await this.bot.telegram.sendMessage(chatId, text, {
      parse_mode: parseMode,
      link_preview_options: disableWebPagePreview ? { is_disabled: true } : undefined,
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

    const result = await this.bot.telegram.sendPhoto(chatId, photoUrl, {
      caption,
      parse_mode: parseMode,
    });

    return {
      messageId: result.message_id,
      chatId: result.chat.id,
    };
  }

  /**
   * Send a media group (album) with multiple photos
   * Caption is only shown on the first photo
   */
  async sendMediaGroup(options: SendMediaGroupOptions): Promise<SendMediaGroupResult> {
    if (!this.isReady()) {
      throw new Error('Telegram bot not initialized');
    }

    const { chatId, mediaUrls, caption, parseMode = 'HTML' } = options;

    if (mediaUrls.length === 0) {
      throw new Error('mediaUrls must contain at least one URL');
    }

    if (mediaUrls.length > 10) {
      throw new Error('mediaUrls cannot contain more than 10 items (Telegram limit)');
    }

    this.logger.debug(`Sending media group (${mediaUrls.length} photos) to ${chatId}`);

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
      await this.bot.telegram.editMessageText(chatId, messageId, undefined, text, {
        parse_mode: parseMode,
      });
      return true;
    } catch (error) {
      this.logger.error(`Failed to edit message ${messageId} in ${chatId}:`, error);
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
      this.logger.error(`Failed to delete message ${messageId} in ${chatId}:`, error);
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
