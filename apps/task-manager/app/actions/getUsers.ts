import prisma from '../lib/prismadb';

export default async function getUsers() {
  try {
    const tasks = await prisma.user.findMany({
      orderBy: {
        createdAt: 'desc',
      }
    });

    return tasks

  } catch (error: any) {
    throw new Error(error);
  }
}
