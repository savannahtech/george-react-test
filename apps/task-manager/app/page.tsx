import React from 'react';
import Link from 'next/link';
import TaskList from './components/TaskList';
import { Button } from "@tasks-management/shared-ui";
import getTasks from './actions/getTasks';

export default async function Index() {
  const tasks = await getTasks();

  return (
    <div className="grid grid-cols-1 gap-5">
      <div className="flex justify-start items-center gap-5">
        <h1 className="text-slate-600 text-[22px] font-semibold">Tasks</h1>

        <Link href="/new-task" as="/new-task">
          <Button
            className='w-24 shadow-sm hover:shadow-md border border-[#DFE3EB] py-[10px] px-3'
            contentClassName='text-gray-400 text-xs font-medium leading-tight'
          >
            New task
          </Button>
        </Link>
      </div>

      <TaskList list={tasks.tasks} pagination={tasks.totalCount} />
    </div>
  );
}


