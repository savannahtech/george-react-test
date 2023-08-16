import React from 'react'
import type { TaskProps } from "@tasks-management/shared-types";
import TaskItem from './TaskItem';

interface TaskListProps {
  list: TaskProps[],
  pagination: number
}

const TaskList = (props: TaskListProps) => {
  const { list } = props;

  return (
    <div className='w-full grid grid-cols-1 gap-4'>
      {list.length > 0 ?
        list.map((el) => (
          <TaskItem key={el.id} task={el} />
        ))
      :
        <div className='min-h-[10rem] flex items-center justify-center border-t border-gray-200'>
          <span className='text-gray-500'>No Tasks Available</span>
        </div>
      }
    </div>
  )
}

export default TaskList;
