import React from 'react'
import type { Task } from "@tasks-management/shared-types";
import TaskItem from './TaskItem';

const TaskList = ({ list }: { list: Task[]}) => {
  return (
    <div className='w-full grid grid-cols-1 gap-4'>
      {list.map((el) => (
        <TaskItem key={el.id} task={el} />
      ))}
    </div>
  )
}

export default TaskList;
