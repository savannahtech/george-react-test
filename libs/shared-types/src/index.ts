export * from './lib/shared-types';

export interface Task {
  id: number;
	title: string;
	assignee: string;
	avatar: string;
  created_at: Date;
  status?: 'Open' | 'In Progress' | 'Done';
}

export interface Assignee {
  id: number;
  name: string
}
