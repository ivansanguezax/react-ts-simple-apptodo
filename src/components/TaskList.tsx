import { Task } from "../interfaces/Task";
import TaskCard from "./TaskCard";

interface Props {
  task: Task[];
  deleteATask: (id: number) => void;
}
export default function TaskList({ task, deleteATask }: Props) {
  return (
    <>
      {task.map((task) => (
        <div key={task.id} className="col-md-4 pb-2">
          <TaskCard task={task} deleteATask={deleteATask} />
        </div>
      ))}
    </>
  );
}
