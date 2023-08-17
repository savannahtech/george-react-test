import React from 'react'
import { Button } from '@tasks-management/shared-ui'

interface confirmProps {
  loading: boolean;
  title: string;
  children: React.ReactNode;
  handleCancel: () => void;
  abort: string;
  handleConfirm: () => void;
  affirmative: string;
}

const Confirm = (props: confirmProps) => {
  const {
    loading,
    title,
    children,
    handleCancel,
    abort,
    handleConfirm,
    affirmative
  } = props;

  return (
    <div className={`mx-auto w-full rounded-2xl bg-[#eeeeee] pt-5 text-center lg:w-[25rem]`}>
      <div className="px-5 text-center">
        <h2 className="text-xl font-bold">{title}</h2>
        {children}
      </div>

      <div className="mt-5 flex items-center border-t border-gray-300 font-semibold">
        <div className="mx-auto w-1/2 border-r border-gray-300">
          <button
            className="h-full w-full py-5 text-lg text-blue-700 font-normal"
            onClick={handleCancel}
            type="button"
          >
            {abort}
          </button>
        </div>

        <div className="flex w-1/2 items-center justify-center">
          <Button
            className="!text-blue-700 !font-bold"
            onClick={handleConfirm}
            type="button"
            isSubmitting={loading}
          >
            {affirmative}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Confirm
