import TaskItem from "./TaskItem"
import type { Task, TaskProps } from "../types/types"

const TaskList: React.FC<TaskProps> = ({ data }) => {

  const renderedTasks = data.map((item: Task) => {
    return (
      <div className='my-3' key={item.id}>
        <TaskItem id={item.id} text={item.text} />
      </div>
      
    )
  })
  return (
    <div>{renderedTasks}</div>
  )
}
export default TaskList