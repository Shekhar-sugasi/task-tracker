import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Filters from "./components/Filters";
import { TaskProvider } from "./context/TaskProvider";
import "./styles/App.css";

function App() {
  return (
    <TaskProvider>
      <div className="app-container">
        <header>
          <h1>Task Tracker</h1>
        </header>
        <main>
          <TaskForm />
          <Filters />
          <TaskList />
        </main>
      </div>
    </TaskProvider>
  );
}

export default App;
