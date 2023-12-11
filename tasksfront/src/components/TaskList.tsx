import TaskItem from "./TaskItem";
import { useTasks } from "../context/useTasks";
import { Scrollbars } from "react-custom-scrollbars-2";

function TaskList(props) {
  const { tasks } = useTasks();

  const sortedTasks = tasks.slice().sort((a, b) => {
    // Ordena por la propiedad 'createdAt'
    return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
  });

  const reversedTasks = sortedTasks.reverse();

  return (
    <div className="task-list-container rounded-md" style={{ height: 400, overflowY: "auto",}} >
      <Scrollbars 
         style={{ width: '100%', height: '100%' }}
         renderThumbVertical={({ style, ...props }) => (
           <div
             {...props}
             style={{
               ...style,
               backgroundColor: 'gray',
               borderRadius: '6px',
               width:'4px',
             }}
           />
         )}
       >
        {reversedTasks.map((task) => (
          <TaskItem task={task} key={task._id} />
        ))}
      </Scrollbars>
    </div>
  );
}

export default TaskList;
