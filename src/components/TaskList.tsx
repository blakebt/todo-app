import TaskItem from "./TaskItem"
import type { Task, TaskProps } from "../types/types"

function TaskList({ data }: TaskProps) {

  const renderedTasks = data.map((item: Task) => {
    return (
      <div key={item.id}>
        <TaskItem id={item.id} text={item.text} />
      </div>
      
    )
  })
  return (
    <div>{renderedTasks}</div>
  )
}
export default TaskList