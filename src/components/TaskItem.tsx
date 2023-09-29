import { useState } from 'react'
import { FaTrashCan, FaPencil } from 'react-icons/fa6'
import useTasksContext from "../hooks/useTasksContext"
import Button from "./Button"
import EditForm from './EditForm'

interface TaskItemProps {
  id: number,
  text: string
}

const TaskItem: React.FC<TaskItemProps> = ({ id, text }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const context = useTasksContext();

  if(!context) return <div>No context</div>
  
  const { removeTask } = context
  
  const handleEditClick = () => {
    setEdit(true)
  }

  const handleClick = () => {
    removeTask(id);
  }

  let content = edit ? (
    <EditForm id={id} text={text} setEdit={setEdit}/>
  ) : (
    <div className="flex items-center justify-between px-3 py-2 bg-offwhite w-full rounded">
      <FaPencil className='mx-2 cursor-pointer' onClick={handleEditClick}/>
      {text}
      <Button className='ml-4 rounded' onClick={handleClick} danger><FaTrashCan /></Button>
    </div>
  )

  return (
    <div>{content}</div>
  )
}
export default TaskItem