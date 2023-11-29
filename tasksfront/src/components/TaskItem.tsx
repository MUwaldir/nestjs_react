import React from "react";
import { Task } from "../interfaces/task.interface";
import { useTasks } from "../context/useTasks";
import { IoCheckmarkDone, IoTrash } from "react-icons/io5";

interface Props {
  task: Task;
}

function TaskItem({ task }: Props) {
  const { deleteTask, updateTask } = useTasks();

  return (
    <div
      className={`p-2 m-2 rounded-md flex justify-between  hover:cursor-pointer ${
        task.done ?  "bg-indigo-900" :"bg-gray-800"
      }`}
      key={task._id}
    >
      <div>
        <h1> titulo : {task.title}</h1>
        <p>{task.description}</p>
        <h3>estado: {task.done ? "hecho" : "pendiente"}</h3>
      </div>
      <div className="flex gap-x-2">
        {task.done ? (
          <IoCheckmarkDone
            className="text-green-500"
            onClick={() => {
              updateTask(task._id, {
                done: !task.done,
              });
            }}
          />
        ) : (
          <IoCheckmarkDone
            className="text-gray-500"
            onClick={() => {
              updateTask(task._id, {
                done: !task.done,
              });
            }}
          />
        )}

        <IoTrash
          onClick={async () => {
            if (!window.confirm("Are you sure you want to delete this task?")) {
              return;
            }
            await deleteTask(task._id);
          }}
        />
      </div>
    </div>
  );
}

export default TaskItem;
