import { useState } from 'react';
import useTasksContext from '../hooks/useTasksContext';
import Button from './Button';


const Form: React.FC = () => {
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
    <form className='flex mb-3' onSubmit={onSubmit}>
      <input value={task} onChange={handleChange} placeholder="Add a task" className='w-full px-3 py-2 bg-offwhite border border-wenge focus:outline-none rounded-l'/>
      <Button primary className='rounded-r'>Add</Button>
    </form>
  )
}
export default Form