import { Module, forwardRef } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { ConfigModule, ConfigService } from '@nestjs/config';
import Redis from 'ioredis';
import { QueueService } from './queue.service';
import { DeliveryProcessor } from './processors/delivery.processor';
import { TELEGRAM_DELIVERY_QUEUE } from './constants';
import { PostsModule } from '../posts/posts.module';
import { TelegramModule } from '../telegram/telegram.module';
import { ChannelsModule } from '../channels/channels.module';

@Module({
  imports: [
    BullModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const redisUrl = configService.get<string>('redis.url');
        return {
          connection: new Redis(redisUrl!, { maxRetriesPerRequest: null }),
        };
      },
    }),
    BullModule.registerQueueAsync({
      name: TELEGRAM_DELIVERY_QUEUE,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        defaultJobOptions: {
          attempts: configService.get<number>('queue.maxAttempts', 5),
          backoff: {
            type: 'exponential',
            delay: 1000,
          },
          removeOnComplete: 100,
          removeOnFail: 1000,
        },
        limiter: {
          max: configService.get<number>('queue.rateLimitMax', 20),
          duration: configService.get<number>('queue.rateLimitDuration', 1000),
        },
      }),
    }),
    forwardRef(() => PostsModule),
    TelegramModule,
    ChannelsModule,
  ],
  providers: [QueueService, DeliveryProcessor],
  exports: [QueueService, BullModule],
})
export class QueueModule {}
