import { useState } from 'react';
import useTasksContext from '../hooks/useTasksContext';
import Button from './Button';

interface EditFormProps {
  id: number,
  text: string,
  setEdit: React.Dispatch<React.SetStateAction<boolean>>
}
const EditForm: React.FC<EditFormProps> = ({ id, text, setEdit }) => {
  const [task, setTask] = useState<string>(text)
  const context = useTasksContext()
  
  if(!context) return <div>No Context</div>

  const { editTask } = context

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    editTask(id, task)
    setEdit(false)
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  }

  return (
    <form className='flex mb-3' onSubmit={handleSubmit}>
      <input value={task} onChange={handleChange} placeholder="Add a task" className='w-full px-3 py-2 bg-offwhite border border-wenge focus:outline-none rounded-l'/>
      <Button primary className='rounded-r'>Save</Button>
    </form>
  )
}
export default EditForm