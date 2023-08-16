export * from './lib/shared-types';
export interface Assignee {
  name: string | null;
  email: string | null;
};

export interface TaskProps {
  id: string;
  userId: string;
  title: string;
  avatar: string;
  status: string;
  created_at: Date,
  user: Assignee
};

