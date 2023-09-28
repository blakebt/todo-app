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
    <div className='flex flex-col justify-center items-center bg-cornsilk min-h-screen' >
      <div className="border p-5 m-5 rounded bg-wenge">
        <Form />
        <TaskList data={actions!.tasks}/>
      </div>
      
    </div>
  )
}
export default App