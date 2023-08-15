'use client';

import React, { useState } from 'react'
import { RightArrow } from '@tasks-management/icons'
import { Tab } from '@headlessui/react'
import { taskList } from '../../api/tasks/tasks'
import TaskItem from '../../components/TaskItem'

const tabHeaders = [
{ id: 0, name: "Related tasks" },
{ id: 1, name: "Watchers" }
]

const TaskInfo = () => {
  const [current, setcurrent] = useState(0);

  return (
    <div>
      <div className="w-full justify-start items-start gap-8 inline-flex">
        <div className="p-4 flex-col justify-start items-start gap-1.5 inline-flex">
          <div className="text-gray-400 text-xs font-medium leading-[18px]">Status</div>
          <div className="px-3 py-0.5 bg-[#EEF2F8] rounded-2xl justify-center items-center inline-flex">
            <div className="text-slate-600 text-[13px] font-medium leading-tight">Open</div>
          </div>
        </div>
        <div className="p-4 flex-col justify-start items-start gap-1.5 inline-flex">
          <div className="text-gray-400 text-xs font-medium leading-[18px]">Date created</div>
          <div className="px-3 py-0.5 bg-[#EEF2F8] rounded-2xl justify-center items-center inline-flex">
            <div className="text-slate-600 text-[13px] font-medium leading-tight">Sep 10, 2022 4:30 PM</div>
          </div>
        </div>
        <div className="p-4 flex-col justify-start items-start gap-1.5 inline-flex">
          <div className="text-gray-400 text-xs font-medium leading-[18px]">Assignee</div>
          <div className="px-3 py-0.5 bg-[#EEF2F8] rounded-2xl justify-center items-center inline-flex">
            <div className="text-slate-600 text-[13px] font-medium leading-tight">Unssigned</div>
          </div>
        </div>
      </div>

      <div className="self-stretch justify-start items-start gap-8 inline-flex">
        <div className="grow shrink basis-0 p-4 flex-col justify-start items-start gap-1.5 inline-flex">
          <h2 className="text-gray-400 text-xs font-medium leading-normal">Desctiption</h2>

          <div className="w-full py-2.5 justify-start items-center gap-2.5 inline-flex">
            <div className="w-full min-h-[10rem] p-4 bg-slate-100 rounded-[10px]">
              <p className="text-slate-600 text-[13px] font-medium leading-normal">
                To live is to risk it all. Otherwise you are just an inert chunk of randomly assembled molecules drifting wherever the universe blows you.
              </p>
            </div>

            <RightArrow />
          </div>
        </div>
      </div>

      <Tab.Group as="div" selectedIndex={current} onChange={setcurrent}>
        <Tab.List as="div" className="px-5">
          {tabHeaders.map(({ id, name }) => (
            <Tab key={id} className={`${current === id ? 'active':''} tab-header`}>
              {name}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel as="div" className="grid grid-cols-1 gap-[16px]">
            {taskList.map((el) => (
              <TaskItem key={el.id} task={el} />
            ))}
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default TaskInfo
