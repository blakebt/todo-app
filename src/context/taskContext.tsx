import { useState, createContext, useCallback } from 'react';
import axios from 'axios';
import { Task, TaskContextType, ContextProp } from '../types/types';

const TasksContext = createContext<TaskContextType | null>(null);

const Provider: React.FC<ContextProp> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([])

  const fetchTasks = useCallback(async () => {
    const response = await axios.get('http://localhost:3005/tasks')
    
    setTasks(response.data);
  }, [])

  const addTask = async (task: string) => {
    const response = await axios.post('http://localhost:3005/tasks', {
      text: task
    })

    setTasks(prevTasks => {
      return [...prevTasks, response.data]
    })
  }

  const removeTask = async (id: number) => {
    await axios.delete(`http://localhost:3005/tasks/${id}`)

    const updatedTasks = tasks.filter((task: Task) => {
      return task.id !== id
    })

    setTasks(updatedTasks);
  }

  const valueToShare = {
    tasks,
    fetchTasks,
    addTask,
    removeTask
  }

  return (
    <TasksContext.Provider value={valueToShare}>
      {children}
    </TasksContext.Provider>
  )
}

export { Provider }
export default TasksContext