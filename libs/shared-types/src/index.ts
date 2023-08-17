export * from './lib/shared-types';
export interface Assignee {
  name: string | null;
  email: string | null;
};

export interface User {
  id: string;
  name: string | null;
  email: string | null;
  emailVerified: boolean;
  image: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface TaskPropAssignee {
  name?: string;
  email?: string;
};

export interface TaskProps {
  id?: string;
  userId?: string;
  title?: string;
  avatar?: string | null;
  description?: string | null;
  status?: string;
  createdAt?: Date,
  updatedAt?: Date,
  user?: TaskPropAssignee
};

export interface Task {
  id: string;
  userId: string;
  title: string;
  description: string | null;
  avatar: string | null;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  user: Assignee
}
