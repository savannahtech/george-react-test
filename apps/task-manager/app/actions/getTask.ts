import prisma from '../lib/prismadb';

export default async function getTask(id: string) {
  try {
    const task = await prisma.task.findUnique({
      where: { id },
      include: {
        user: true
      }
    });

    return {
      id: task?.id,
      userId: task?.userId,
      title: task?.title,
      description: task?.description as string | undefined,
      avatar: task?.avatar as string | undefined,
      status: task?.status,
      createdAt: task?.createdAt,
      updatedAt: task?.updatedAt,
      user: {
        name: task?.user.name as string | undefined,
        email: task?.user.email as string | undefined,
      }
    }
  } catch (error) {
    console.error('Error:', error);
    throw new Error(error as 'string | undefined');
  }
}
