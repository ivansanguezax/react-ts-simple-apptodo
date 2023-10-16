import { ChangeEvent, FormEvent, useState, useRef } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Task } from "../interfaces/Task";

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const initialTask = {
    title: "",
    description: "",
    };

interface Props {
  addANewTask: (task: Task) => void;
}

export default function TaskForm({ addANewTask }: Props) {
  const [task, setTask] = useState(initialTask);
  const inputTitle = useRef<HTMLInputElement>(null);

  const handleInputChange = ({ target: { name, value } }: InputChange) => {
    setTask({
      ...task,
      [name]: value,
    });
  };

  const handleNewTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addANewTask(task);
    setTask(initialTask);
    inputTitle.current?.focus();
  };

  return (
    <div className="card card-body bg-secondary text-dark">
      <h1>Add Task</h1>
      <form onSubmit={handleNewTask}>
        <input
          type="text"
          placeholder="escribe algo"
          name="title"
          className="form-control mb-3 rounded-0 shadow-none border-0"
          onChange={handleInputChange}
          value={task.title}
          ref={inputTitle}
        />
        <textarea
          placeholder="escribe algo"
          name="description"
          className="form-control mb-3 rounded-0 shadow-none border-0"
          onChange={handleInputChange}
          value={task.description}
        ></textarea>
        <button className="btn btn-primary btn-block">
          Save
          <AiOutlinePlus />
        </button>
      </form>
    </div>
  );
}
