import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EventEmitterModule } from '@nestjs/event-emitter';

import configuration from './config/configuration';
import { PrismaModule } from './prisma/prisma.module';
import { ChannelsModule } from './channels/channels.module';
import { RulesModule } from './rules/rules.module';
import { PostsModule } from './posts/posts.module';
import { TelegramModule } from './telegram/telegram.module';
import { QueueModule } from './queue/queue.module';
import { EventsModule } from './events/events.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [
    // Configuration
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),

    // Event Emitter for internal events
    EventEmitterModule.forRoot(),

    // Core modules
    PrismaModule,
    TelegramModule,
    QueueModule,

    // Feature modules
    ChannelsModule,
    RulesModule,
    PostsModule,
    EventsModule,
    HealthModule,
  ],
})
export class AppModule {}
