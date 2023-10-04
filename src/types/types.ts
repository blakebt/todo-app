interface Task {
  id: number,
  text: string,
  completed: boolean
}

interface TaskProps {
  data: Task[]
}

interface TaskContextType {
  tasks: Task[];
  fetchTasks: () => Promise<void>;
  addTask: (task: string) => Promise<void>;
  removeTask: (id: number) => Promise<void>;
  editTask: (id: number, text: string, completed: boolean) => Promise<void>
}

type ContextProp = {
  children?: React.ReactNode
}

export type {
  TaskProps,
  Task,
  TaskContextType,
  ContextProp
}