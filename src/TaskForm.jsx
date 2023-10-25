import React, { useState } from "react";

const TaskForm = ({onAdd}) => {
  const [taskName, setTaskName] = useState("");
const handleSubmint = e =>{
  e.preventDefault();
  onAdd(taskName)
  setTaskName('')
}
  return (
    <form onSubmit={handleSubmint}>
      <button>+</button>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Your next task..."
      />
    </form>
  );
};

export default TaskForm;
