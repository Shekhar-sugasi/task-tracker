import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import Task from "./Task";
import "../styles/TaskList.css";

function TaskList() {
  const { filteredTasks } = useContext(TaskContext);

  return (
    <div className="task-list">
      {filteredTasks.length > 0 ? (
        filteredTasks.map((task) => <Task key={task.id} task={task} />)
      ) : (
        <p>No tasks available</p>
      )}
    </div>
  );
}

export default TaskList;
