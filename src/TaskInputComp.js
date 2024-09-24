import React, { useState } from "react";

function TaskInputComp({ onAddTask }) {
  const [inputValue, setInputValue] = useState("");

  const handleAddTask = () => {
    if (inputValue) {
      onAddTask(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default TaskInputComp;
