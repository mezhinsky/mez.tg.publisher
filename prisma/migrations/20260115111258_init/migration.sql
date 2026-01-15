-- CreateEnum
CREATE TYPE "ChannelRuleType" AS ENUM ('TAG', 'CATEGORY', 'ALL');

-- CreateEnum
CREATE TYPE "PostStatus" AS ENUM ('PENDING', 'SENT', 'PARTIAL', 'FAILED');

-- CreateEnum
CREATE TYPE "DeliveryStatus" AS ENUM ('PENDING', 'SENT', 'FAILED', 'CANCELLED');

-- CreateTable
CREATE TABLE "Channel" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "chatId" TEXT NOT NULL,
    "username" TEXT,
    "title" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Channel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChannelRule" (
    "id" TEXT NOT NULL,
    "channelId" TEXT NOT NULL,
    "type" "ChannelRuleType" NOT NULL DEFAULT 'TAG',
    "value" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ChannelRule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "articleId" TEXT NOT NULL,
    "status" "PostStatus" NOT NULL DEFAULT 'PENDING',
    "payload" JSONB NOT NULL,
    "payloadHash" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PostDelivery" (
    "id" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "channelId" TEXT NOT NULL,
    "status" "DeliveryStatus" NOT NULL DEFAULT 'PENDING',
    "telegramMessageId" TEXT,
    "attempts" INTEGER NOT NULL DEFAULT 0,
    "lastError" TEXT,
    "sentAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PostDelivery_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Channel_key_key" ON "Channel"("key");

-- CreateIndex
CREATE INDEX "Channel_isActive_idx" ON "Channel"("isActive");

-- CreateIndex
CREATE INDEX "Channel_key_idx" ON "Channel"("key");

-- CreateIndex
CREATE INDEX "ChannelRule_type_value_idx" ON "ChannelRule"("type", "value");

-- CreateIndex
CREATE INDEX "ChannelRule_isActive_idx" ON "ChannelRule"("isActive");

-- CreateIndex
CREATE UNIQUE INDEX "ChannelRule_channelId_type_value_key" ON "ChannelRule"("channelId", "type", "value");

-- CreateIndex
CREATE UNIQUE INDEX "Post_articleId_key" ON "Post"("articleId");

-- CreateIndex
CREATE INDEX "Post_status_idx" ON "Post"("status");

-- CreateIndex
CREATE INDEX "Post_articleId_idx" ON "Post"("articleId");

-- CreateIndex
CREATE INDEX "Post_createdAt_idx" ON "Post"("createdAt");

-- CreateIndex
CREATE INDEX "PostDelivery_status_idx" ON "PostDelivery"("status");

-- CreateIndex
CREATE INDEX "PostDelivery_channelId_idx" ON "PostDelivery"("channelId");

-- CreateIndex
CREATE INDEX "PostDelivery_createdAt_idx" ON "PostDelivery"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "PostDelivery_postId_channelId_key" ON "PostDelivery"("postId", "channelId");

-- AddForeignKey
ALTER TABLE "ChannelRule" ADD CONSTRAINT "ChannelRule_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "Channel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostDelivery" ADD CONSTRAINT "PostDelivery_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostDelivery" ADD CONSTRAINT "PostDelivery_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "Channel"("id") ON DELETE CASCADE ON UPDATE CASCADE;
