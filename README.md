Структура проекта mez.tg.publisher

mez.tg.publisher/
├── prisma/
│ └── schema.prisma # Модели: Channel, ChannelRule, Post, PostDelivery
├── src/
│ ├── app.module.ts # Главный модуль с импортами
│ ├── main.ts # Точка входа (порт 3002)
│ ├── config/
│ │ └── configuration.ts # Конфигурация из .env
│ ├── common/
│ │ ├── dto/
│ │ │ ├── pagination.dto.ts
│ │ │ └── paginated-response.dto.ts
│ │ ├── filters/
│ │ │ └── http-exception.filter.ts
│ │ └── guards/
│ │ └── admin-auth.guard.ts # Заготовка для авторизации
│ ├── prisma/
│ │ ├── prisma.module.ts # Глобальный модуль
│ │ └── prisma.service.ts
│ ├── channels/ # Channels API
│ │ ├── channels.module.ts
│ │ ├── channels.controller.ts
│ │ ├── channels.service.ts
│ │ └── dto/
│ ├── rules/ # Channel Rules API
│ │ ├── rules.module.ts
│ │ ├── rules.controller.ts
│ │ ├── rules.service.ts
│ │ └── dto/
│ ├── posts/ # Posts & Deliveries API
│ │ ├── posts.module.ts
│ │ ├── posts.controller.ts
│ │ ├── posts.service.ts
│ │ ├── deliveries.controller.ts
│ │ ├── deliveries.service.ts
│ │ └── dto/
│ ├── telegram/ # Telegraf integration
│ │ ├── telegram.module.ts
│ │ └── telegram.service.ts
│ ├── queue/ # BullMQ queue
│ │ ├── queue.module.ts # [НОВЫЙ] BullMQ configuration
│ │ ├── queue.service.ts
│ │ ├── constants.ts
│ │ └── processors/
│ │ └── delivery.processor.ts # [НОВЫЙ] Worker
│ ├── events/ # [НОВЫЙ] Event consumer
│ │ ├── events.module.ts
│ │ ├── events.controller.ts # POST /api/events/article-published
│ │ ├── events.service.ts
│ │ └── dto/
│ │ └── article-published.dto.ts
│ └── health/ # [НОВЫЙ] Health checks
│ ├── health.module.ts
│ └── health.controller.ts # GET /api/health, /api/queues/telegram
├── .env.example
├── docker-compose.yml
└── package.json

Ключевые созданные компоненты:

1. QueueModule (src/queue/queue.module.ts)

- BullMQ с rate limiting (20 jobs/sec)
- Exponential backoff для retries
- 5 попыток по умолчанию

2. DeliveryProcessor (src/queue/processors/delivery.processor.ts)

- Обработка job'ов отправки в Telegram
- Форматирование сообщений (HTML)
- Обновление статусов Post/PostDelivery
- Emit события tg.post.published для главного канала

3. EventsModule (src/events/)

- POST /api/events/article-published — принимает события
- Валидация webhook secret
- Роутинг по тегам через ChannelRule
- Идемпотентный upsert Post и PostDelivery

4. HealthModule (src/health/)

- GET /api/health — статус database, redis, telegram
- GET /api/queues/telegram — статистика очереди

REST API эндпоинты:
┌────────┬──────────────────────────────────┬───────────────────────────────────┐
│ Метод │ Путь │ Описание │
├────────┼──────────────────────────────────┼───────────────────────────────────┤
│ GET │ /api/channels │ Список каналов (пагинация, поиск) │
├────────┼──────────────────────────────────┼───────────────────────────────────┤
│ POST │ /api/channels │ Создать канал │
├────────┼──────────────────────────────────┼───────────────────────────────────┤
│ GET │ /api/channels/:id │ Канал по ID │
├────────┼──────────────────────────────────┼───────────────────────────────────┤
│ PATCH │ /api/channels/:id │ Обновить канал │
├────────┼──────────────────────────────────┼───────────────────────────────────┤
│ DELETE │ /api/channels/:id │ Soft-delete (isActive=false) │
├────────┼──────────────────────────────────┼───────────────────────────────────┤
│ GET │ /api/rules │ Список правил маршрутизации │
├────────┼──────────────────────────────────┼───────────────────────────────────┤
│ POST │ /api/rules │ Создать правило │
├────────┼──────────────────────────────────┼───────────────────────────────────┤
│ PATCH │ /api/rules/:id │ Обновить правило │
├────────┼──────────────────────────────────┼───────────────────────────────────┤
│ DELETE │ /api/rules/:id │ Удалить правило │
├────────┼──────────────────────────────────┼───────────────────────────────────┤
│ GET │ /api/posts │ Список публикаций │
├────────┼──────────────────────────────────┼───────────────────────────────────┤
│ GET │ /api/posts/:id │ Публикация с deliveries │
├────────┼──────────────────────────────────┼───────────────────────────────────┤
│ GET │ /api/posts/by-article/:articleId │ По articleId │
├────────┼──────────────────────────────────┼───────────────────────────────────┤
│ POST │ /api/posts/:id/retry │ Переотправить FAILED │
├────────┼──────────────────────────────────┼───────────────────────────────────┤
│ GET │ /api/deliveries │ Список доставок │
├────────┼──────────────────────────────────┼───────────────────────────────────┤
│ POST │ /api/deliveries/:id/retry │ Retry одной доставки │
├────────┼──────────────────────────────────┼───────────────────────────────────┤
│ POST │ /api/deliveries/:id/cancel │ Отменить доставку │
├────────┼──────────────────────────────────┼───────────────────────────────────┤
│ POST │ /api/events/article-published │ Событие публикации │
├────────┼──────────────────────────────────┼───────────────────────────────────┤
│ GET │ /api/health │ Health check │
├────────┼──────────────────────────────────┼───────────────────────────────────┤
│ GET │ /api/queues/telegram │ Queue stats │
└────────┴──────────────────────────────────┴───────────────────────────────────┘
Запуск:

# 1. Запустить инфраструктуру

docker compose up -d

# 2. Применить миграции

npx prisma migrate dev

# 3. Запустить сервис

npm run start:dev

Сервис будет доступен на http://localhost:3002/api

✻ Crunched for 10m 5s

⏺ Background command "Install npm dependencies" completed (exit code 0)

⏺ Эта задача уже была обработана — установка зависимостей завершилась успешно, и сборка проекта прошла без ошибок. Все компоненты созданы и готовы к использованию.
