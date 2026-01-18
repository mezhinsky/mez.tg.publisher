import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Query,
  HttpCode,
  HttpStatus,
  Body,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostQueryDto } from './dto/post-query.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  findAll(@Query() query: PostQueryDto) {
    return this.postsService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(id);
  }

  @Get('by-article/:articleId')
  findByArticleId(@Param('articleId') articleId: string) {
    return this.postsService.findByArticleId(articleId);
  }

  @Post(':id/retry')
  @HttpCode(HttpStatus.OK)
  retry(@Param('id') id: string) {
    return this.postsService.retryPost(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdatePostDto) {
    const { createEditDeliveries, ...fields } = dto;
    return this.postsService.updatePostPayload(id, fields, {
      createEditDeliveries,
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postsService.deletePost(id);
  }
}
