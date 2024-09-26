import React from "react";

function Listitem({ task, onToggleComplete, onRemoveTask }) {
  return (
    <li className={task.isCompleted ? "task completed" : "task"}>
      <input
        type="checkbox"
        checked={task.isCompleted}
        onChange={() => onToggleComplete(task.id)}
      />
      <span>{task.text}</span>
      <button onClick={() => onRemoveTask(task.id)}>Delete</button>
    </li>
  );
}

export default Listitem;
