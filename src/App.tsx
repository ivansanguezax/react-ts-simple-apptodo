import { useState } from "react";
import "./App.css";
import logo from "./logo.svg";
import { Task } from "./interfaces/Task";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

interface Props {
  title?: string;
}

export function App({ title }: Props) {
  const [tasks, setTask] = useState<Task[]>([
    {
      id: 1,
      title: "Learn React",
      description: "Learn React and TypeScript",
      completed: false,
    },
  ]);

  const getCurrentDay  = ():number => Date.now();

  const addANewTask = (task: Task) => setTask([...tasks, { ...task, id: getCurrentDay(), completed: false  }]);

  const deleteTask = (id: number) => setTask(tasks.filter((task) => task.id !== id));

  return (
    <div className="bg-dark text-white" style={{ height: "100vh" }}>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="" style={{ width: "4rem" }} />
            {title && <h1>{title}</h1>}
          </a>
        </div>
      </nav>

      <main className="container p-4">
        <div className="row">
          <div className="col-md-4">
            <TaskForm addANewTask={addANewTask} />
          </div>
          <div className="col-md-8">
            <div className="row">
              <TaskList task={tasks} deleteATask={
                deleteTask
              }/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
