import React from 'react'
import Link from 'next/link';
import type { Task } from "@tasks-management/shared-types";
import { TaskIcon } from '@tasks-management/icons';

const TaskItem = ({ task }: { task: Task }) => {
  return (
    <Link href={`/task/${task.id}`}>
      <div className="w-full h-[120px] p-8 bg-white rounded-[10px] hover:shadow-lg border border-slate-100 flex justify-between items-center gap-8 cursor-pointer">
        <div className="justify-start items-center gap-6 flex">
          <div className="w-16 h-16 bg-[#0F52BA] rounded-[10px] border border-indigo-300 justify-center items-center gap-6 flex">
            <TaskIcon />
          </div>

          <div className="flex-col justify-start items-start gap-2 inline-flex">
            <h2 className="task-title">{task.title}</h2>
            <div className="font-medium self-stretch justify-start items-center gap-1 inline-flex leading-normal text-xs text-gray-400">
              <div className="font-semibold">{task.user.name}</div>
              <span>·</span>
              <div>Creation Date</div>
              <div className="text-gray-500">{new Date(task.createdAt)?.toDateString()}</div>
            </div>
          </div>
        </div>
        <div className="justify-start items-center gap-8 flex">
          <div className="justify-start items-center gap-4 flex">
            <div className="w-[100px] h-8 px-3 py-2.5 rounded-md border border-zinc-200 justify-start items-center gap-2 flex cursor-pointer">
              <div className="text-slate-600 text-xs font-medium leading-tight">{task.status}</div>
            </div>
            <svg className="w-6 h-6" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="#98A2B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default TaskItem
