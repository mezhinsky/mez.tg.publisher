import { Injectable, Logger } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';
import { TELEGRAM_DELIVERY_QUEUE, DeliveryJobData } from './constants';

@Injectable()
export class QueueService {
  private readonly logger = new Logger(QueueService.name);

  constructor(
    @InjectQueue(TELEGRAM_DELIVERY_QUEUE)
    private readonly deliveryQueue: Queue<DeliveryJobData>,
  ) {}

  /**
   * Add a delivery job to the queue
   */
  async addDeliveryJob(deliveryId: string, delay?: number): Promise<void> {
    await this.deliveryQueue.add(
      'send',
      { deliveryId },
      {
        jobId: `delivery-${deliveryId}`,
        delay,
        removeOnComplete: 100, // Keep last 100 completed jobs
        removeOnFail: 1000, // Keep last 1000 failed jobs
      },
    );

    this.logger.debug(`Added delivery job: ${deliveryId}`);
  }

  /**
   * Get queue statistics
   */
  async getQueueStats() {
    const [waiting, active, completed, failed, delayed] = await Promise.all([
      this.deliveryQueue.getWaitingCount(),
      this.deliveryQueue.getActiveCount(),
      this.deliveryQueue.getCompletedCount(),
      this.deliveryQueue.getFailedCount(),
      this.deliveryQueue.getDelayedCount(),
    ]);

    return {
      name: TELEGRAM_DELIVERY_QUEUE,
      waiting,
      active,
      completed,
      failed,
      delayed,
      isPaused: await this.deliveryQueue.isPaused(),
    };
  }

  /**
   * Pause the queue
   */
  async pause(): Promise<void> {
    await this.deliveryQueue.pause();
    this.logger.log('Queue paused');
  }

  /**
   * Resume the queue
   */
  async resume(): Promise<void> {
    await this.deliveryQueue.resume();
    this.logger.log('Queue resumed');
  }

  /**
   * Get a job by ID
   */
  async getJob(jobId: string) {
    return this.deliveryQueue.getJob(jobId);
  }

  /**
   * Remove a job by ID
   */
  async removeJob(jobId: string): Promise<boolean> {
    const job = await this.deliveryQueue.getJob(jobId);
    if (job) {
      await job.remove();
      return true;
    }
    return false;
  }
}
