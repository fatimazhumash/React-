import React, { useState, useEffect } from "react";
import "./ToDoList1.css";

function ToDoList1() {
  const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState("");
  const [deadline, setDeadline] = useState("");
  const [filter, setFilter] = useState("all");
  const [darkMode, setDarkMode] = useState(false);
  const [page, setPage] = useState("first-page");
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (t) => {
    const h = String(t.getHours()).padStart(2, "0");
    const m = String(t.getMinutes()).padStart(2, "0");
    const s = String(t.getSeconds()).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  const addTask = () => {
    if (value.trim() === "") return;
    const newTask = {
      text: value,
      deadline,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setValue("");
    setDeadline("");
  };

  const toggleComplete = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true;
  });

  if (page === "first-page") {
    return (
      <div className={`container12 ${darkMode ? "dark" : ""}`}>
        <h2>To Do List</h2>
        <p>{formatTime(time)}</p>
        <button onClick={() => setPage("entrance")}>Entrance</button>
        <button style={{
            backgroundColor: darkMode ? "black" : "white",
            color: darkMode ? "white" : "black",
          }}
          onClick={() => setDarkMode(!darkMode)}
         
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    );
  }

  return (
    <div className={`todo-page ${darkMode ? "dark" : ""}`}>
      <div className="header">
        <h2>ToDo List</h2>
        <p>{formatTime(time)}</p>
        <button onClick={() => setPage("first-page")}>Exit </button>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <div className="input-group">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter the task"
        />
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <div className="filter-box">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
        <button onClick={() => setFilter("incomplete")}>Incomplete</button>
      </div>

      <ul className="task-list">
        {filteredTasks.map((task, index) => {
          const timeLeft = Math.ceil(
            (new Date(task.deadline) - new Date()) / (1000 * 60 * 60 * 24)
          );
          return (
            <li key={index}>
              <strong>{task.text}</strong>
              <br />
              Deadline: {task.deadline} 
              <br />
              <button onClick={() => toggleComplete(index)}>
                {task.completed ? "Қайта бастау" : "Аяқталды"}
              </button>
              <button onClick={() => removeTask(index)}>Delate</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ToDoList1;



