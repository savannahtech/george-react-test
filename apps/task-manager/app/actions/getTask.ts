import prisma from '../lib/prismadb';

export default async function getTask(id: string) {
  console.log('Page Id:', id);

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
      description: task?.description,
      avatar: task?.avatar,
      status: task?.status,
      created_at: task?.createdAt,
      user: {
        name   : task?.user.name,
        email  : task?.user.email,
      }
    }
  } catch (error) {
    console.error('Error:', error);
    throw new Error(error as 'string | undefined');
  }
}
