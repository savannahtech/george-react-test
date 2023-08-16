'use client';

import React, { useCallback, useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { Tab } from '@headlessui/react'
import { peopleList } from '../../api/people'

import { AddIcon, Plus } from '@tasks-management/icons'
import { Button } from '@tasks-management/shared-ui'
import DropdownList from './DropdownList'

const TaskForm = async () => {
  const router = useRouter();
  const [steps, setSteps] = useState(0);
  const [loading, setloading] = useState(false);
  const [data, setdata] = useState({
    title: '',
    created_at: new Date(),
    description: ''
  })

  const handlePrevNext = useCallback(() => {
    console.log('Handle Next:')
    if (steps < 1) setSteps((prev) => prev + 1);
    else setSteps((prev) => prev - 1);
  }, [steps])

  const handleComplete = useCallback(async () => {
    // e.preventDefault();

    try {
      console.log('Data:', data);
      // await fetch(`/api/tasks`, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // })
      // await router.push('/');
    } catch (error) {
      console.error(error)
    }

    setloading(true);
    setTimeout(() => {
      setloading(false);
      router.push('/');
    }, 2000);
  }, [data, router])

  const handleUpdate = (type: string, value: string) => {
    setdata((prev) => {
      return {...prev, [type]: value}
    })
  }

  console.log("What's happening here..");

  return (
    <div
      className='grid grid-cols-1 gap-5 bg-[#F7F9FC] p-6 rounded-lg pb-12 mb-16'
    >
      <div className="w-full h-16 justify-start items-center gap-6 inline-flex">
        <div className="w-16 h-16 bg-[#0F52BA] rounded-[10px] border border-indigo-300 justify-center items-center gap-6 flex">
          <AddIcon />
        </div>

        <div className="grow shrink basis-0 pt-[3px] flex-col justify-start items-start gap-1 inline-flex">
          <input
            autoFocus
            className='task-title task-input border-none'
            // onChange={(e) => handleUpdate('title', e.target.value)}
            placeholder='Task Title'
          />
          <input
            className="task-date"
            type="datetime-local"
            // onChange={(e) => handleUpdate('created_at', e.target.value)}
          />
        </div>

        <div className="relative px-3 flex justify-start items-center gap-2">
          <div className="text-gray-400 text-[13px] font-medium leading-tight">Assign to</div>
          <DropdownList list={peopleList} />
        </div>
      </div>

      <hr className="border-gray-200" />

      {steps > 0 && (
        <div className="grow shrink basis-0 p-4 flex-col justify-start items-start gap-1.5 inline-flex">
          <h2 className="text-gray-400 text-xs font-medium leading-normal">Desctiption</h2>

          <textarea
            name="description"
            id="description"
            rows={7}
            // onChange={(e) => handleUpdate('description', e.target.value)}
            className='new-task-description'
          ></textarea>
        </div>
      )}

      {steps > 0 && (
        <div className='grid grid-cols-1 gap-6'>
          <Tab.Group as="div" className="p-6 pb-0">
            <Tab.List as="div" className="px-5">
              <Tab className="tab-header active">
                Related tasks
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel as="div" className="grid grid-cols-1 gap-[16px]">
                <div></div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>

          <Link href="/" as="/">
            <div className="px-6 pb-0 flex justify-start items-center gap-1.5">
              <Plus />
              <div className="text-slate-600 text-base font-medium leading-[18px]">Link to other tasks</div>
            </div>
          </Link>
        </div>
      )}

      <div className='flex justify-end gap-[6px]'>
        <Button
          onClick={handlePrevNext}
          className={`task-button ${steps < 1 ? 'active-btn': 'inactive-btn'}`}
        >
          {steps < 1 ? 'Next':'Back'}
        </Button>
        <Button
          onClick={handleComplete}
          className={`task-button ${steps < 1 ? 'inactive-btn': 'active-btn'}`}
          disabled={steps < 1}
          isSubmitting={loading}
        >
          Finish
        </Button>
      </div>
    </div>
  )
}


export default TaskForm
