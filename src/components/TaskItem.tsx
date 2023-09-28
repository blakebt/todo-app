import { FaTrashCan } from 'react-icons/fa6'
import useTasksContext from "../hooks/useTasksContext"
import Button from "./Button"

interface TaskItemProps {
  id: number,
  text: string
}

const TaskItem: React.FC<TaskItemProps> = ({ id, text }) => {
  const context = useTasksContext();

  if(!context) return <div>No context</div>
  
  const { removeTask } = context
  
  const handleClick = () => {
    removeTask(id);
  }

  return (
    <div className="flex items-center justify-between px-3 py-2 bg-offwhite w-full rounded">
      {text}
      <Button className='ml-4 rounded' onClick={handleClick} danger><FaTrashCan /></Button>
    </div>
  )
}
export default TaskItem