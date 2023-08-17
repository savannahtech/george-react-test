import prisma from '../lib/prismadb';

export default async function getTask(id: string) {
  console.log('Page Id:', id);

  try {
    const task = await prisma.task.findUnique({
      where: { id }
    });

    console.log('Full task:', task);

    return {
      id: task?.id,
      userId: task?.userId,
      title: task?.title,
      description: task?.description,
      avatar: task?.avatar,
      status: task?.status,
      created_at: task?.createdAt
    }
  } catch (error) {
    console.error('Error:', error);
    throw new Error(error as 'string | undefined');
  }
}
