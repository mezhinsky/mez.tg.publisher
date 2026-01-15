import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Logger,
  Headers,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ArticlePublishedDto } from './dto/article-published.dto';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController {
  private readonly logger = new Logger(EventsController.name);
  private readonly webhookSecret: string | undefined;

  constructor(
    private readonly eventsService: EventsService,
    private readonly configService: ConfigService,
  ) {
    this.webhookSecret = this.configService.get<string>('events.webhookSecret');
  }

  @Post('article-published')
  @HttpCode(HttpStatus.ACCEPTED)
  async handleArticlePublished(
    @Body() dto: ArticlePublishedDto,
    @Headers('x-webhook-secret') secret?: string,
  ) {
    // Validate webhook secret if configured
    if (this.webhookSecret && secret !== this.webhookSecret) {
      this.logger.warn('Invalid webhook secret received');
      throw new UnauthorizedException('Invalid webhook secret');
    }

    this.logger.log(`Received article.published event: ${dto.articleId}`);

    const result = await this.eventsService.handleArticlePublished(dto);

    return {
      success: true,
      postId: result.postId,
      deliveriesCreated: result.deliveriesCreated,
    };
  }
}
