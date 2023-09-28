import { useEffect } from "react"
import Form from "./Form"
import TaskList from "./TaskList"
import useTasksContext from "../hooks/useTasksContext"
function App() {

  const actions = useTasksContext()
  
  const fetchTasks = actions!.fetchTasks
  useEffect(() => {
    fetchTasks()
  }, [fetchTasks])

  return (
    <div>
      <Form />
      <TaskList data={actions!.tasks}/>
    </div>
  )
}
export default App