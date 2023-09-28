import { FaTrashCan } from 'react-icons/fa6'
import useTasksContext from "../hooks/useTasksContext"
import Button from "./Button"

interface TaskItemProps {
  id: number,
  text: string
}

function TaskItem({ id, text }: TaskItemProps) {
  const actions = useTasksContext();

  const removeTask = actions!.removeTask;

  
  const handleClick = () => {
    removeTask(id);
  }

  return (
    <div className="flex items-center justify-between px-3 py-2 bg-offwhite w-full rounded">
      {text}
      <Button className='ml-4' onClick={handleClick} danger><FaTrashCan /></Button>
    </div>
  )
}
export default TaskItem