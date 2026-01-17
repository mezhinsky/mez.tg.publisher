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
    const jobId = `delivery-${deliveryId}`;

    // BullMQ deduplicates by jobId: if a failed/completed job is still stored,
    // Queue.add() won't enqueue a new one. For "retry" flows we want to ensure
    // there is an actual runnable job in the queue.
    const existing = await this.deliveryQueue.getJob(jobId);
    if (existing) {
      const state = await existing.getState();

      if (state === 'failed') {
        await existing.retry();
        this.logger.debug(`Retried existing delivery job: ${deliveryId}`);
        return;
      }

      if (state === 'delayed') {
        await existing.promote();
        this.logger.debug(`Promoted existing delivery job: ${deliveryId}`);
        return;
      }

      if (state === 'waiting' || state === 'active') {
        this.logger.debug(`Delivery job already queued (${state}): ${deliveryId}`);
        return;
      }

      // completed/paused/etc: remove and enqueue a fresh job
      try {
        await existing.remove();
      } catch {
        // If removal fails (e.g. lock), fall back to leaving it as-is.
        this.logger.warn(`Failed to remove existing job (${state}): ${deliveryId}`);
      }
    }

    await this.deliveryQueue.add(
      'send',
      { deliveryId },
      {
        jobId,
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
