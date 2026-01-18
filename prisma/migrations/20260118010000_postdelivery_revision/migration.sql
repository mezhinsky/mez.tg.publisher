-- Add revision column to allow multiple deliveries per (post, channel) over time (edits/updates)
ALTER TABLE "PostDelivery" ADD COLUMN "revision" INTEGER NOT NULL DEFAULT 0;

-- Replace unique constraint so we can have multiple revisions
DROP INDEX "PostDelivery_postId_channelId_key";
CREATE UNIQUE INDEX "PostDelivery_postId_channelId_revision_key"
ON "PostDelivery"("postId", "channelId", "revision");

