import { Task } from "@tasks-management/shared-types";

export const taskList: Task[] = [
  {
    id: 1,
    title: 'Task Title',
    assignee: 'Assignee',
    avatar: '',
    created_at: new Date('2023-07-25'),
    status: 'Open',
  },
  {
    id: 2,
    title: 'Task Title I',
    assignee: 'Assignee',
    avatar: '',
    created_at: new Date('2023-07-26'),
    status: 'In Progress',
  },
  {
    id: 3,
    title: 'Task Title II',
    assignee: 'Assignee',
    avatar: '',
    created_at: new Date('2023-07-27'),
    status: 'Done',
  },
];
