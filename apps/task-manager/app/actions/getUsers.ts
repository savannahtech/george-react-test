import prisma from '../lib/prismadb';

export default async function getUsers() {
  try {
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });

    // console.log('Full Users:', users);

    return users;
  } catch (error: any) {
    throw new Error(error);
  }
}
