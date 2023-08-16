// import styles from './page.module.css';

import TaskHeader from "./components/TaskHeader";
import TaskInfo from "./components/TaskInfo";
import { Plus } from "@tasks-management/icons";
import Link from "next/link";

const Task: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-5 bg-[#F7F9FC] p-6 pb-12 mb-16">
      <TaskHeader />
      <hr className="border-gray-200" />
      <TaskInfo />

      <Link href="/" as="/">
        <div className="px-4 flex justify-start items-center gap-1.5">
          <Plus />
          <div className="text-slate-600 text-base font-medium leading-[18px]">Link to other tasks</div>
        </div>
      </Link>
    </div>
  );
}

export default Task;
