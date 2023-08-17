'use client';

import React, { useState } from 'react'
import { RightArrow } from '@tasks-management/icons'
import { Tab } from '@headlessui/react'
import TaskItem from '../../components/TaskItem'
import { TaskProps, Task } from '@tasks-management/shared-types';

const tabHeaders = [
  { id: 0, name: "Related tasks" },
  { id: 1, name: "Watchers" }
];

const TaskInfo = ({ task }: { task: TaskProps }) => {
  const [current, setcurrent] = useState(0);
  const taskDate = task?.createdAt as Date;
  const linkedTask = [] as Task[];

  return (
    <div>
      <div className="w-full justify-start items-start gap-8 inline-flex">
        <div className="flex flex-col justify-start items-start gap-1.5 p-4">
          <div className="task-info-status">Status</div>
          <div className="task-info-pill">
            <div className="task-info-content">{task.status}</div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-1.5 p-4">
          <div className="task-info-status">Date created</div>
          <div className="task-info-pill">
            <div className="task-info-content">{new Date(taskDate)?.toDateString()}</div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-1.5 p-4">
          <div className="task-info-status">Assignee</div>
          <div className="task-info-pill">
            <div className="task-info-content">{task?.user?.name}</div>
          </div>
        </div>
      </div>

      <div className="w-full self-stretch justify-start items-start gap-8 inline-flex">
        <div className="grow shrink basis-0 p-4 flex-col justify-start items-start gap-1.5 inline-flex">
          <h2 className="text-gray-400 text-xs font-medium leading-normal">Description</h2>

          <div className="w-full py-2.5 flex justify-between items-center gap-2.5">
            <div className="w-full min-h-[10rem] p-4 bg-slate-100 rounded-[10px]">
              <p className="task-info-description">
                {task.description}
              </p>
            </div>

            <RightArrow />
          </div>
        </div>
      </div>

      <Tab.Group as="div" selectedIndex={current} onChange={setcurrent}>
        <Tab.List as="div" className="px-5">
          {tabHeaders.map(({ id, name }) => (
            <Tab key={id} className={`${current === id ? 'active' : ''} tab-header`}>
              {name}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel as="div" className="grid grid-cols-1 gap-[16px]">
            {linkedTask.map((el) => (
              <TaskItem key={el.id} task={el} />
            ))}
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default TaskInfo
