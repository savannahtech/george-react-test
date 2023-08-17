import React from 'react';
import Link from "next/link";
import TaskHeader from "../components/TaskHeader";
import TaskInfo from "../components/TaskInfo";
import { Plus } from "@tasks-management/icons";
import getTask from '../../actions/getTask';
import { Toaster } from 'react-hot-toast';


export default async function Page({ params }: { params: { id: string } }) {
// export default async function Id (props: TaskProp) {
  const { id } = params;
  const task = await getTask(id);

  return (
    <div className="grid grid-cols-1 gap-5 bg-[#F7F9FC] p-6 pb-12 mb-16">
      <TaskHeader task={task} />
      <hr className="border-gray-200" />
      <TaskInfo task={task} />

      <Link href="/" as="/">
        <div className="px-4 flex justify-start items-center gap-1.5">
          <Plus />
          <div className="text-slate-600 text-base font-medium leading-[18px]">Link to other tasks</div>
        </div>
      </Link>

      <Toaster />
    </div>
  );
};
