'use client';

import React, { useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { Tab } from '@headlessui/react'
import { useForm } from "react-hook-form"
import { toast, Toaster } from 'react-hot-toast';

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
    emailVerified: false,
    image: '',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "2",
    name: "In Progress",
    email: '',
    emailVerified: false,
    image: '',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "3",
    name: "Done",
    email: '',
    emailVerified: false,
    image: '',
    createdAt: new Date(),
    updatedAt: new Date()
  },
];

const TaskForm = (props: UsersProps) => {
  const { register, clearErrors, setValue, trigger, handleSubmit, formState: { errors } } = useForm();
  const { users } = props;

  const router = useRouter();
  const [steps, setSteps] = useState(0);
  const [loading, setloading] = useState(false);

  const handlePrevNext = () => {
    if (steps < 1) setSteps((prev) => prev + 1);
    else setSteps((prev) => prev - 1);
  }

  const handleComplete = async (data: any) => {
    try {
      if (steps < 1) return;

      const validationFields = ["title", "created_at"];
      trigger(validationFields).then(async (res) => {
        if (res) {
          const payload: any = { ...data };

          payload.avatar = '';
          payload.userId = payload?.assignee?.id;
          payload.status = payload?.status?.name;
          payload.description = `${payload.description}`
          payload.createdAt = new Date(payload.created_at)

          delete payload.created_at;
          delete payload.assignee;
          delete payload.user

          setloading(true);

          const req = await fetch(`/api/tasks`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          })

          if (req) {
            setloading(false);
            toast.success('Task Added Successfully')
            setTimeout(() => {
              router.refresh();
              router.replace('/');
            }, 1000);
          }
        } else {
          toast.error(`Complete all required fields`)
        }
      })
    } catch (error) {
      setloading(false);
      console.error('Error occured:', error);
      toast.error(`Error occurred creating task. Please try again`)
    }
  }

  const handleSelected = (type: string, user: User) => {
    setValue(type, user)
  }

  return (
    <div>
      <form
        className='grid grid-cols-1 gap-5 bg-[#F7F9FC] p-6 rounded-lg pb-12 mb-16'
        onSubmit={handleSubmit(handleComplete)}
      >
        <div className="w-full justify-start items-start gap-6 inline-flex">
          <div className="w-16 h-16 bg-[#0F52BA] rounded-[10px] border border-indigo-300 justify-center items-center gap-6 flex">
            <AddIcon />
          </div>

          <div className="grow shrink basis-0 pt-[3px] flex-col justify-start items-start gap-2 inline-flex">
            <div>
              <input
                autoFocus
                className='min-w-[14rem] task-title task-input '
                {...register('title', { required: true })}
                onChange={() => clearErrors()}
                placeholder='Task Title'
              />
              {errors.title && (<p className='form-error'>Title is required</p>)}
            </div>

            <div>
              <input
                className="task-date min-w-[14rem]"
                type="date"
                {...register('created_at', { required: true })}
                onChange={() => clearErrors()}
              />
              {errors.created_at && (<p className='form-error'>Due Date is required</p>)}
            </div>
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
              <h2 className="text-gray-400 text-xs font-medium leading-normal">Description</h2>

              <textarea
                id="description"
                rows={5}
                className='new-task-description task-input'
                {...register('description', { required: true })}
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
              className={`task-button ${steps < 1 ? 'inactive-btn' : 'active-btn'}`}
              disabled={steps < 1}
              isSubmitting={loading}
            >
              Finish
            </Button>
          </div>
        </div>
      </form>

      <Toaster />
    </div>
  )
}

export default TaskForm;
