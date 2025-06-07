import React, { useState, useEffect } from "react";
import "./TodoApp.css";

function TodoApp() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  const [filter, setFilter] = useState("all");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");
  const [time, setTime] = useState(new Date());

  // Local storage update
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Clock logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (t) => {
    const hours = String(t.getHours()).padStart(2, "0");
    const minutes = String(t.getMinutes()).padStart(2, "0");
    const seconds = String(t.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  // Task functions
  const addTask = (text, deadline, priority) => {
    const newTask = {
      id: Date.now(),
      text,
      done: false,
      createdAt: new Date().toISOString(),
      deadline,
      priority,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const startEditing = (id, text) => {
    setEditingId(id);
    setEditingText(text);
  };

  const saveEditing = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, text: editingText } : t));
    setEditingId(null);
    setEditingText("");
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === "active") return !task.done;
    if (filter === "completed") return task.done;
    return true;
  });

  // ✅ Single return, clock + todo UI
  return (
    <div className="todo-container">
      <h1>Todo List</h1>

      <div className="clock">{formatTime(time)}</div>

      <input
        type="text"
        id="new-task"
        placeholder="New task..."
        onKeyDown={e => {
          if (e.key === "Enter" && e.target.value.trim() !== "") {
            const deadline = prompt("Enter deadline (YYYY-MM-DD):");
            const priority = prompt("Enter priority (low, medium, high):");
            addTask(e.target.value.trim(), deadline, priority);
            e.target.value = "";
          }
        }}
      />

      <div>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>

      <ul>
        {filteredTasks.map(task => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTask(task.id)}
            />
            {editingId === task.id ? (
              <>
                <input
                  value={editingText}
                  onChange={e => setEditingText(e.target.value)}
                />
                <button onClick={() => saveEditing(task.id)}>Save</button>
              </>
            ) : (
              <span
                onDoubleClick={() => startEditing(task.id, task.text)}
                style={{
                  textDecoration: task.done ? "line-through" : "none"
                }}
              >
                {task.text} ({task.priority}) - due: {task.deadline || "none"}
              </span>
            )}
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
