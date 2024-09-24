import React, { useState } from "react";
import "./App.css";
import TaskInputComp from "./TaskInputComp";

function App() {
  const [tasks, setTasks] = useState([]);

  // add a task
  const addTask = (taskText) => {
    setTasks([
      ...tasks,
      { text: taskText, isCompleted: false, id: Date.now() },
    ]);
  };

  //  task complete
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  // delete task
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <TaskInputComp onAddTask={addTask} />
      <ul className="task-list">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={task.isCompleted ? "task completed" : "task"}
          >
            <input
              type="checkbox"
              checked={task.isCompleted}
              onChange={() => toggleComplete(task.id)}
            />
            <span>{task.text}</span>
            <button onClick={() => removeTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
