'use client';

import React, { useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { Tab } from '@headlessui/react'
import toast, { Toaster } from 'react-hot-toast';

import { AddIcon, Plus } from '@tasks-management/icons'
import { Button } from '@tasks-management/shared-ui'
import { User } from '@tasks-management/shared-types';
import DropdownList from './DropdownList'

interface UsersProps {
  users: User[]
}

const statuses: User[] = [
  {
    id: "1",
    name: "Open",
    email: '',
    emailVerified: new Date(),
    image: '',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "2",
    name: "In Progress",
    email: '',
    emailVerified: new Date(),
    image: '',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "3",
    name: "Done",
    email: '',
    emailVerified: new Date(),
    image: '',
    createdAt: new Date(),
    updatedAt: new Date()
  },
];

const TaskForm = (props: UsersProps) => {
  const { users } = props;

  const router = useRouter();
  const [steps, setSteps] = useState(0);
  const [loading, setloading] = useState(false);
  const [data, setdata] = useState()

  const handlePrevNext = () => {
    console.log('Handle Next:')
    if (steps < 1) setSteps((prev) => prev + 1);
    else setSteps((prev) => prev - 1);
  }

  const handleComplete = async () => {
    try {
      const payload: any = Object.assign({}, data);
      console.log('Payload before:', payload);

      payload.avatar = '';
      payload.userId = payload.assignee.id;
      payload.status = payload.status.name;
      payload.description = `${payload.description}`

      delete payload.created_at;
      delete payload.assignee;
      delete payload.user

      setloading(true);
      const req = await fetch(`/api/tasks`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      console.log('Post request:', req);

      // const response = req.json();
      // response
      // .then((res) => {
      //   setloading(false);
      //   toast.success('Task Added!')
      //   setTimeout(() => {
      //     router.refresh()
      //     router.push('/')
      //   }, 2000);
      // }, (err) => {
      //   toast.error('Error!')
      //   setloading(false);
      // })
    } catch (error) {
      setloading(false);
    }
  }

  const handleUpdate = (type: string, value: string) => {
    setdata((prev: any) => {
      return { ...prev, [type]: value }
    })
  }

  const handleSelected = (type: string, user: User) => {
    setdata((prev: any) => {
      return { ...prev, [type]: user }
    })
  }

  return (
    <div className='grid grid-cols-1 gap-5 bg-[#F7F9FC] p-6 rounded-lg pb-12 mb-16'>
      <div className="w-full h-16 justify-start items-center gap-6 inline-flex">
        <div className="w-16 h-16 bg-[#0F52BA] rounded-[10px] border border-indigo-300 justify-center items-center gap-6 flex">
          <AddIcon />
        </div>

        <div className="grow shrink basis-0 pt-[3px] flex-col justify-start items-start gap-1 inline-flex">
          <input
            autoFocus
            className='task-title task-input border-none'
            onChange={(e) => handleUpdate('title', e.target.value)}
            placeholder='Task Title'
          />
          <input
            className="task-date"
            type="datetime-local"
            onChange={(e) => handleUpdate('created_at', e.target.value)}
          />
        </div>

        <div className="relative px-3 flex justify-start items-center gap-2">
          <div className="text-gray-400 text-[13px] font-medium leading-tight">Assign to</div>
          <DropdownList list={users} type="assignee" handleSelected={handleSelected} />
        </div>
      </div>

      <hr className="border-gray-200" />

      {steps > 0 && (
        <>
          <div className="grow shrink basis-0 p-4 flex-col justify-start items-start gap-1.5 inline-flex">
            <h2 className="text-gray-400 text-xs font-medium leading-normal">Desctiption</h2>

            <textarea
              name="description"
              id="description"
              rows={7}
              onChange={(e) => handleUpdate('description', e.target.value)}
              className='new-task-description task-input'
            ></textarea>
          </div>

          <div className="relative px-3 flex justify-start items-center gap-2">
            <div className="text-gray-400 text-[13px] font-medium leading-tight">Status</div>
            <DropdownList list={statuses} type="status" handleSelected={handleSelected} />
          </div>

          <hr className="border-gray-200" />

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
        </>
      )}

      <div className='flex justify-between items-center'>
        <div>
          {steps < 1 &&
            <Button
              onClick={() => { router.back() }}
              className="task-button inactive-btn"
            >
              Go Back
            </Button>
          }
        </div>

        <div className='flex items-center gap-2'>
          <Button
            onClick={handlePrevNext}
            className={`task-button ${steps < 1 ? 'active-btn' : 'inactive-btn'}`}
          >
            {steps < 1 ? 'Next' : 'Back'}
          </Button>

          <Button
            onClick={handleComplete}
            className={`task-button ${steps < 1 ? 'inactive-btn' : 'active-btn'}`}
            disabled={steps < 1}
            isSubmitting={loading}
          >
            Finish
          </Button>
        </div>
      </div>

      <Toaster />
    </div>
  )
}

export default TaskForm
