'use client';

// import styles from './page.module.css';
import TaskList from './components/TaskList';
import { taskList } from './api/tasks/tasks';
import { Button } from "@tasks-management/shared-ui";
import Link from 'next/link';

export default async function Index() {
  return (
    <div className="grid grid-cols-1 gap-5">
      <div className="flex justify-start items-center gap-5">
        <h1 className="text-slate-600 text-[22px] font-semibold">Tasks</h1>

        <Link href="/new-task">
          <Button className='w-24 border border-[#DFE3EB] py-[10px] px-3' contentClassName='text-gray-400 text-xs font-medium leading-tight'>
            New task
          </Button>
        </Link>
      </div>

      <TaskList list={taskList} />
    </div>
  );
}
