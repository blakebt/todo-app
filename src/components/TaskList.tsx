import TaskItem from "./TaskItem"
import { TaskProps } from "../types/types"

interface Task {
  id: number,
  text: string
}

function TaskList({ data }: TaskProps) {

  const renderedTasks = data.map((item: Task) => {
    return (
      <div key={item.id}>
        <TaskItem text={item.text} />
      </div>
      
    )
  })
  return (
    <div>{renderedTasks}</div>
  )
}
export default TaskList