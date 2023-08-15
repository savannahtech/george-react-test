import React from 'react'
import { AddIcon } from '@tasks-management/icons';

const TaskHeader = () => {
  return (
    <div className="w-full h-16 justify-start items-center gap-6 inline-flex">
      <div className="w-16 h-16 bg-[#0F52BA] rounded-[10px] border border-indigo-300 justify-center items-center gap-6 flex">
        <AddIcon />
      </div>
      <div className="grow shrink basis-0 pt-[3px] flex-col justify-start items-start gap-1 inline-flex">
        <div className="task-title">Task Title</div>
        <div className="task-date">Sep 10, 2022 4:30 PM</div>
      </div>
    </div>
  )
}

export default TaskHeader
