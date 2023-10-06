import TaskItem from "./TaskItem"
import type { Task, TaskProps } from "../types/types"

const TaskList = ({ data }: TaskProps) => {

  const renderedTasks = data.map((item: Task) => {
    return (
      <div className='my-3' key={item.id}>
        <TaskItem task={item} />
      </div>
      
    )
  })
  return (
    <div>{renderedTasks}</div>
  )
}
export default TaskList