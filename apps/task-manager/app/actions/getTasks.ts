import { Task } from '@tasks-management/shared-types';
import prisma from '../lib/prismadb';

export default async function getTasks() {
  try {
    const tasks = await prisma.task.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        user: true
      }
    });

    const newTasks = tasks.map((task: Task) => ({
      id: task.id,
      userId: task.userId,
      title: task.title,
      avatar: task.avatar,
      status: task.status,
      description: task.description,
      createdAt: task.createdAt,
      updatedAt: task.updatedAt,
      user: {
        name: task.user.name,
        email: task.user.email,
      }
    }));

    const totalCount = await prisma.task.count();

    return {
      tasks: newTasks,
      totalCount: totalCount
    };

  } catch (error) {
    console.error('Error:', error);
    throw new Error(error as 'string | undefined');
  }
}
