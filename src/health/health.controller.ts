import { Controller, Get } from '@nestjs/common';
import { QueueService } from '../queue/queue.service';
import { PrismaService } from '../prisma/prisma.service';
import { TelegramService } from '../telegram/telegram.service';

interface HealthCheckResult {
  status: 'ok' | 'degraded' | 'error';
  timestamp: string;
  services: {
    database: boolean;
    redis: boolean;
    telegram: boolean;
  };
  uptime: number;
}

interface QueueStatsResult {
  name: string;
  waiting: number;
  active: number;
  completed: number;
  failed: number;
  delayed: number;
  isPaused: boolean;
}

@Controller()
export class HealthController {
  private readonly startTime = Date.now();

  constructor(
    private readonly queueService: QueueService,
    private readonly prisma: PrismaService,
    private readonly telegramService: TelegramService,
  ) {}

  @Get('health')
  async check(): Promise<HealthCheckResult> {
    const services = {
      database: false,
      redis: false,
      telegram: false,
    };

    // Check database
    try {
      await this.prisma.$queryRaw`SELECT 1`;
      services.database = true;
    } catch {
      // Database check failed
    }

    // Check Redis (via queue stats)
    try {
      await this.queueService.getQueueStats();
      services.redis = true;
    } catch {
      // Redis check failed
    }

    // Check Telegram
    services.telegram = this.telegramService.isReady();

    const allHealthy = Object.values(services).every(Boolean);
    const someHealthy = Object.values(services).some(Boolean);

    return {
      status: allHealthy ? 'ok' : someHealthy ? 'degraded' : 'error',
      timestamp: new Date().toISOString(),
      services,
      uptime: Math.floor((Date.now() - this.startTime) / 1000),
    };
  }

  @Get('queues/telegram')
  async getQueueStats(): Promise<QueueStatsResult> {
    return this.queueService.getQueueStats();
  }
}
