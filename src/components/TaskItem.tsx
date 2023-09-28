interface TaskItemProps {
  text: string
}

function TaskItem({ text }: TaskItemProps) {
  return (
    <div>{text}</div>
  )
}
export default TaskItem