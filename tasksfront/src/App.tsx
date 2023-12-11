import React from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { TaskProvider } from "./context/TaskContext";

function App() {
  return (
    <div className="bg-zinc-900 text-white min-h-screen flex items-center justify-center">
      <div className="bg-gray-950 p-4 md:w-4/5 lg:w-3/5 xl:w-2/5 mx-auto w-full">
        <h1 className="text-3xl font-bold text-center block my-2">TaskApp</h1>

        <TaskProvider>
          <TaskForm />
          <TaskList />
        </TaskProvider>
      </div>
    </div>
  );
}

export default App;
