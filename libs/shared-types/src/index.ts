export * from './lib/shared-types';
export interface Assignee {
  name?: string | null;
  email?: string | null;
};

export interface User {
  id: string;
  name: string | null | undefined;
  email: string | null | undefined;
  emailVerified: Date | null;
  image: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface TaskProps {
  id: string;
  userId: string;
  title: string;
  avatar: string;
  status: string;
  created_at: Date,
  user: Assignee
};

export interface Task {
  id?: string;
  userId?: string;
  title?: string;
  description?: string;
  avatar?: string;
  status?: string;
  created_at: Date | undefined;
  user: Assignee
}
