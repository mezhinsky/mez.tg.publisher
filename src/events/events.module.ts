import { Module } from '@nestjs/common';
import { EventsController } from './events.controller';
import { EventsService } from './events.service';
import { PostsModule } from '../posts/posts.module';
import { ChannelsModule } from '../channels/channels.module';
import { QueueModule } from '../queue/queue.module';

@Module({
  imports: [PostsModule, ChannelsModule, QueueModule],
  controllers: [EventsController],
  providers: [EventsService],
  exports: [EventsService],
})
export class EventsModule {}
