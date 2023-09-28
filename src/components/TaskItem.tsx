import useTasksContext from "../hooks/useTasksContext"

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
    <div>
      {text}
      <button onClick={handleClick}>Delete</button>
    </div>
  )
}
export default TaskItem