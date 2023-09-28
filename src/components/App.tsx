import Form from "./Form"
import TaskList from "./TaskList"
function App() {
  
  const tasks = [
    {id: 1, text: 'go to store'},
    {id: 2, text: 'go home'},
    {id: 3, text: 'walk the dog'}
  ]
  return (
    <div>
      <Form />
      <TaskList data={tasks}/>
    </div>
  )
}
export default App