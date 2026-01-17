import { PrismaService } from '../prisma/prisma.service';

async function main() {
  const prisma = new PrismaService();
  await prisma.$connect();

  try {
    const result = await prisma.post.updateMany({
      where: {
        status: 'PENDING',
        deliveries: { none: {} },
      },
      data: { status: 'SENT' },
    });

    // eslint-disable-next-line no-console
    console.log(
      `[reconcile-posts] Updated posts with 0 deliveries: ${result.count}`,
    );
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((error) => {
  // eslint-disable-next-line no-console
  console.error('[reconcile-posts] Failed:', error);
  process.exit(1);
});

