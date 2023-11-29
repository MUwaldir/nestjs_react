import React, { useState, ChangeEvent, FormEvent } from "react";
import { createTaskRequest } from "../api/tasks";
import { useTasks } from "../context/useTasks";

function TaskForm(props) {
  const [task, setTask] = useState({
    title: "",
    description: "",
    done: false,
  });

  const {createTask} = useTasks()
    const [error, setError] = useState<string| null>(null)
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
      // Validaciones
      if (!task.title.trim(3)) {
        setError("El campo de tarea mas de 3 caracteres");
        return;
      }
      setError(null)
      try {
        
        await  createTask(task)
        setTask(
            {
                title: "",
                description: "",
                done: false,
              } 
        )
      } catch (error) {
        console.error("Error al crear la tarea:", error);
      }
   
    // console.log(data);
  
  };

  return (
    <div className="max-w-md mx-auto my-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="task"
          >
            Tarea
          </label>
          <input
            name="title"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="task"
            type="text"
            placeholder="Escribe tu tarea"
            value={task.title}
            onChange={handleChange}
          />
           {error && (
          <p className="text-red-500 text-sm italic mb-4">{error}</p>
        )}
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Descripción
          </label>
          <textarea
            name="description"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            placeholder="Escribe la descripción de la tarea"
            rows="4"
            value={task.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="">
            <input
              type="checkbox"
              onChange={(e) => setTask({ ...task, done: e.target.checked })}
            />
            <span className="text-black pl-2">Done</span>
          </label>
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Crear Tarea
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
