import { useState } from 'react'
import { FaTrashCan, FaPencil } from 'react-icons/fa6'
import useTasksContext from "../hooks/useTasksContext"
import Button from "./Button"
import EditForm from './EditForm'
import Checkbox from './Checkbox'

interface TaskItemProps {
  id: number,
  text: string
}

const TaskItem: React.FC<TaskItemProps> = ({ id, text }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [completed, setCompleted] = useState<boolean>(false)

  const context = useTasksContext();

  if(!context) return <div>No context</div>
  
  const { removeTask } = context
  
  const handleEditClick = () => {
    setEdit(true)
  }

  const handleDeleteClick = () => {
    removeTask(id);
  }

  /* If the edit button was clicked, show the edit form instead of the task item */
  let content = edit ? (
    <EditForm id={id} text={text} setEdit={setEdit} />
  ) : (
    <div className="flex items-center justify-between px-3 py-2 bg-offwhite w-full rounded">
      <Checkbox setCompleted={setCompleted}/>
      <div className={`flex mx-4 ${completed ? 'line-through' : ''}`}>
        {text}
      </div>
      <div className='flex items-center'>
        <Button className='ml-5 rounded' onClick={handleDeleteClick} danger><FaTrashCan /></Button>
        <Button className='mx-1 rounded' onClick={handleEditClick} danger><FaPencil /></Button>
      </div>
    </div>
  )

  return (
    <div>{content}</div>
  )
}
export default TaskItem