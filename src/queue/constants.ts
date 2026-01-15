export const TELEGRAM_DELIVERY_QUEUE = 'telegram-delivery';

export const QUEUE_EVENTS = {
  DELIVERY_COMPLETED: 'delivery.completed',
  DELIVERY_FAILED: 'delivery.failed',
} as const;

export interface DeliveryJobData {
  deliveryId: string;
}

export interface DeliveryJobResult {
  success: boolean;
  telegramMessageId?: string;
  telegramUrl?: string;
  error?: string;
}
