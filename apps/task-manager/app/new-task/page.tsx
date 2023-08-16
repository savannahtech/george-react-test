import React from 'react'
import TaskForm from "./components/TaskForm";
import getUsers from '../actions/getUsers';

export default async function NewTask() {
  const users = await getUsers();

  return (
    <div>
      <TaskForm users={users} />
    </div>
  );
}
