import React from "react";
import { Task } from "../interfaces/task.interface";
import { useTasks } from "../context/useTasks";
import { IoCheckmarkDone, IoTrash } from "react-icons/io5";

interface Props {
  task: Task;
}

function TaskItem({ task }: Props) {
  const { deleteTask, updateTask } = useTasks();
 // Crear un objeto Date a partir de la cadena de fecha
 const fecha = new Date(task.createdAt);

 // Obtener el día, mes y año por separado
 const dia = fecha.getDate().toString().padStart(2, '0');
 const mes = (fecha.getMonth() + 1).toString().padStart(2, '0'); // Los meses en JavaScript van de 0 a 11
 const año = fecha.getFullYear().toString().slice(-2); // Obtener los últimos dos dígitos del año

 // Obtener la hora, los minutos y los segundos por separado
 const hora = fecha.getHours().toString().padStart(2, '0');
 const minutos = fecha.getMinutes().toString().padStart(2, '0');
 const segundos = fecha.getSeconds().toString().padStart(2, '0');

  return (
    <div
      className={`p-2 m-2 rounded-md flex justify-between  hover:cursor-pointer ${
        task.done ?  "bg-indigo-900" :"bg-gray-800"
      }`}
      key={task._id}
    >
      <div>
        <h1 className="text-gray-50"> {task.title}</h1>
        <p className="text-gray-400">{task.description}</p>
        <p className="text-xs">{`${dia}/${mes}/${año} ${hora}:${minutos}:${segundos}`}</p>
        {/* <h3>estado: {task.done ? "hecho" : "pendiente"}</h3> */}
      </div>
      <div className="flex gap-x-2 ">
        {task.done ? (
          <IoCheckmarkDone
            className="text-green-500  text-xl "
            onClick={() => {
              updateTask(task._id, {
                done: !task.done,
              });
            }}
          />
        ) : (
          <IoCheckmarkDone
            className="text-gray-500 text-xl"
            onClick={() => {
              updateTask(task._id, {
                done: !task.done,
              });
            }}
          />
        )}

        <IoTrash
        className="text-xl text-red-600"
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
