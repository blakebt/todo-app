import { useEffect } from "react"
import Form from "./Form"
import TaskList from "./TaskList"
import Panel from "./Panel"
import useTasksContext from "../hooks/useTasksContext"

const App: React.FC = () => {

  const context = useTasksContext()
  
  const { fetchTasks, tasks } = context!

  useEffect(() => {
    fetchTasks()
  }, [fetchTasks])

  return (
    <div className='flex flex-col justify-center items-center bg-cornsilk min-h-screen' >
      <Panel className="bg-wenge border-wenge">
        <Form />
        <TaskList data={tasks}/>
      </Panel> 
    </div>
  )
}
export default App