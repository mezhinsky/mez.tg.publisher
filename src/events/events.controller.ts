import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Logger,
  UseGuards,
} from '@nestjs/common';
import { ArticlePublishedDto } from './dto/article-published.dto';
import { EventsService } from './events.service';
import { EventsAuthGuard } from './guards/events-auth.guard';

@Controller('events')
export class EventsController {
  private readonly logger = new Logger(EventsController.name);

  constructor(private readonly eventsService: EventsService) {}

  @Post('article-published')
  @UseGuards(EventsAuthGuard)
  @HttpCode(HttpStatus.ACCEPTED)
  async handleArticlePublished(
    @Body() dto: ArticlePublishedDto,
  ) {
    this.logger.log(`Received article.published event: ${dto.articleId}`);

    const result = await this.eventsService.handleArticlePublished(dto);

    return {
      success: true,
      postId: result.postId,
      deliveriesCreated: result.deliveriesCreated,
    };
  }
}
