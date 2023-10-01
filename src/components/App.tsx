import { useEffect } from "react"
import useTasksContext from "../hooks/useTasksContext"
import Form from "./Form"
import TaskList from "./TaskList"
import Panel from "./Panel"

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