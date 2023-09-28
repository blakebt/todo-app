import { useState } from 'react';
import useTasksContext from '../hooks/useTasksContext';


function Form() {
  const [task, setTask] = useState<string>('')
  const actions = useTasksContext()
  
  const addTask = actions!.addTask

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTask(task)
    setTask('');
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  }

  return (
    <form onSubmit={onSubmit}>
      <input value={task} onChange={handleChange} placeholder="Add a task"/>
      <button>Add</button>
    </form>
  )
}
export default Form