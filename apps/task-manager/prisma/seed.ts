import { PrismaClient } from "@prisma/client";
import { userDump } from './data/users';

const prisma = new PrismaClient();

async function runSeeders() {
  await Promise.all(
    userDump.map(async (user) =>
      prisma.user.upsert({
        where : { email: user.email },
        update: {},
        create: {
          name: user.name,
          email: user.email
        },
      })
    )
  );
}

runSeeders()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit();
  });
