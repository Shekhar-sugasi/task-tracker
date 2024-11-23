import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import "../styles/TaskForm.css";

function TaskForm() {
  const { addTask } = useContext(TaskContext);
  const [task, setTask] = useState({
    id: Date.now(),
    title: "",
    description: "",
    dueDate: "",
    status: "Pending",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    setTask({
      id: Date.now(),
      title: "",
      description: "",
      dueDate: "",
      status: "Pending",
    });
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
        required
      />
      <textarea
        placeholder="Description"
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
        required
      ></textarea>
      <input
        type="date"
        value={task.dueDate}
        onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
        required
      />
      <select
        value={task.status}
        onChange={(e) => setTask({ ...task, status: e.target.value })}
      >
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
