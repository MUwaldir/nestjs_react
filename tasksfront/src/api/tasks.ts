import { CreateTask, UpdateTask } from "../interfaces/task.interface";

const API: string = 'http://localhost:4000/api'

export const createTaskRequest = (task:CreateTask) => {
    const response = fetch(`${API}/tasks`, {
        method: 'POST',
        body: JSON.stringify(task),
        headers: {
           'Content-Type': 'application/json' 
        }
    });
    return response;
}

export const getTaskRequest = () => {
    const response = fetch(`${API}/tasks`);
    return response;
}

export const deleteTaskRequest = (id: string) => {
    const response = fetch(`${API}/tasks/${id}`,{
        method: 'DELETE',

    })
    return response;
}

export const updateTaskRequest = (id: string,task:UpdateTask) => {
    const response = fetch(`${API}/tasks/${id}`,{
        method: 'PUT',
        body: JSON.stringify(task),
        headers: {
            "Content-Type": "application/json",
        }
    })
    return response;
}