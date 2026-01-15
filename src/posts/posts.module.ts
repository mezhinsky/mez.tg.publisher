import { Module, forwardRef } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { DeliveriesController } from './deliveries.controller';
import { DeliveriesService } from './deliveries.service';
import { QueueModule } from '../queue/queue.module';

@Module({
  imports: [forwardRef(() => QueueModule)],
  controllers: [PostsController, DeliveriesController],
  providers: [PostsService, DeliveriesService],
  exports: [PostsService, DeliveriesService],
})
export class PostsModule {}
