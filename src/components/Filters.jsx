import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import "../styles/Filters.css";

function Filters() {
  const { tasks, setFilteredTasks } = useContext(TaskContext);
  const [filter, setFilter] = useState("All");

  const applyFilter = (status) => {
    setFilter(status);
    console.log(filter);
    if (status === "All") {
      setFilteredTasks([...tasks]);
    } else {
      const filtered = tasks.filter((task) => task.status === status);
      setFilteredTasks(filtered);
    }
  };

  return (
    <div className="filters">
      <button onClick={() => applyFilter("All")} className="all">
        All
      </button>
      <button onClick={() => applyFilter("Pending")} className="pending">
        Pending
      </button>
      <button
        onClick={() => applyFilter("In Progress")}
        className="in-progress"
      >
        In Progress
      </button>
      <button onClick={() => applyFilter("Completed")} className="completed">
        Completed
      </button>
    </div>
  );
}

export default Filters;
