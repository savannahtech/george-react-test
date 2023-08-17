'use client';

import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { toast, Toaster } from 'react-hot-toast';

import { AddIcon } from '@tasks-management/icons';
import { TaskProps } from '@tasks-management/shared-types';
import { Button } from '@tasks-management/shared-ui';
import Confirm from './Confirm';

// eslint-disable-next-line @nx/enforce-module-boundaries
import Modal from 'libs/shared-ui/src/lib/modal/modal';

const TaskHeader = ({ task }: { task: TaskProps }) => {
  const router = useRouter();
  const [loading, setloading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const taskDate = task?.createdAt as Date;

  const handleAction = (type: string) => {
    switch (type) {
      case 'delete':
        setIsOpen(true);
        break;

      case 'edit':

        break;

      default:
        break;
    }
  }

  const handleConfirm = async () => {
    try {
      setloading(true);

      const req = await fetch(`/api/tasks/${task?.id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
      })

      if (req) {
        setloading(false);
        toast.success('Task Removed!')
        setTimeout(() => {
          router.refresh();
          router.replace('/');
        }, 1000);
      }
    } catch (error) {
      setloading(false);
      toast.error(`Error occurred removing task. Please try again`)
    }
  }

  return (
    <section className='relative w-full'>
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-[#0F52BA] rounded-[10px] border border-indigo-300 justify-center items-center gap-6 flex">
            <AddIcon />
          </div>

          <div className="grow shrink basis-0 pt-[3px] flex-col justify-start items-start gap-1 inline-flex">
            <div className="task-title">{task?.title}</div>
            <div className="task-date !border-none !p-0">{new Date(taskDate)?.toDateString()}</div>
          </div>
        </div>

        <div className='flex justify-center items-center gap-4'>
          <Button contentClassName='w-8 h-8 rounded-full hover:bg-white' onClick={() => handleAction('edit')}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
            </svg>
          </Button>

          <Button contentClassName='w-8 h-8 rounded-full hover:bg-white' onClick={() => handleAction('delete')}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
            </svg>
          </Button>
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title=""
      >
        <Confirm
          loading={loading}
          title="Alert!"
          handleCancel={() => setIsOpen(false)}
          abort="No"
          handleConfirm={handleConfirm}
          affirmative="Yes"
        >
          <div className='pt-3'>
            Are you sure you want to delete this task?
            <br /> <br />
            <p>All related task will be unassigned!</p>
          </div>
        </Confirm>
      </Modal>

      <Toaster />
    </section>
  )
}

export default TaskHeader
