import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      email: (process.env.ADMIN_EMAIL as string) || 'admin@gmail.com',
      firstName: 'Web',
      lastName: 'Admin',
      password: await bcrypt.hash(process.env.ADMIN_PASSWORD as string, 10),
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
