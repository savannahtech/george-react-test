import { Task } from '@tasks-management/shared-types';
import React from 'react'

interface LinkTaskProps {
  handleClose: (val: boolean) => void;
  tasks: Task
}

const LinkTask = (props : LinkTaskProps) => {
  const {
    handleClose,
    tasks
  } = props;

  const handleLink = () => {
    // Perform Link here
  }

  return (
    <section className='rounded-2xl bg-white p-20p w-full md:w-1/3 mx-auto space-y-4'>
      <div className='flex justify-between items-center'>
        <h2 className='text-2xl font-bold'>Link Task</h2>

        <div className='cursor-pointer hover:bg-default flex items-center justify-center w-10 h-10 rounded-full'
          onClick={() => handleClose(false)}
        >
          <svg className='w-5 h-5' viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 17L16.5228 1M17 17L1.47723 1" stroke="black" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      {/* Show List to link */}
      <div>

      </div>

      {/*  */}
    </section>
  )
}

export default LinkTask
