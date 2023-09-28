import { useEffect } from "react"
import Form from "./Form"
import TaskList from "./TaskList"
import Panel from "./Panel"
import useTasksContext from "../hooks/useTasksContext"

const App: React.FC = () => {

  const actions = useTasksContext()
  
  const fetchTasks = actions!.fetchTasks
  useEffect(() => {
    fetchTasks()
  }, [fetchTasks])

  return (
    <div className='flex flex-col justify-center items-center bg-cornsilk min-h-screen' >
      <Panel className="bg-wenge border-wenge">
        <Form />
        <TaskList data={actions!.tasks}/>
      </Panel> 
    </div>
  )
}
export default App