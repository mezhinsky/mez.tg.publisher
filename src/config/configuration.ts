export default () => ({
  port: parseInt(process.env.PORT || '3002', 10),
  nodeEnv: process.env.NODE_ENV || 'development',

  database: {
    url: process.env.DATABASE_URL,
  },

  redis: {
    url: process.env.REDIS_URL || 'redis://localhost:6379',
  },

  telegram: {
    botToken: process.env.TELEGRAM_BOT_TOKEN,
    strictInit: process.env.TELEGRAM_STRICT_INIT === 'true',
  },

  queue: {
    rateLimitMax: parseInt(process.env.QUEUE_RATE_LIMIT_MAX || '20', 10),
    rateLimitDuration: parseInt(
      process.env.QUEUE_RATE_LIMIT_DURATION || '1000',
      10,
    ),
    maxAttempts: parseInt(process.env.QUEUE_MAX_ATTEMPTS || '5', 10),
  },

  mainChannelKey: process.env.MAIN_CHANNEL_KEY || 'mem_main',

  events: {
    webhookUrl: process.env.EVENTS_WEBHOOK_URL,
    webhookSecret: process.env.EVENTS_WEBHOOK_SECRET,
  },
});
