import { useContext } from "react";
import TasksContext from "../context/taskContext";

const useTasksContext = () => {
  const actions = useContext(TasksContext)

  if(!actions) return null
  return actions
}

export default useTasksContext