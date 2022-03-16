import React from "react";

export function CreateTasks({ addTodo, inputTask, setInputTask, priority, setPriority }) {
  const options = [
    {
      label: "Select",
      value: "None"
    },
    {
      label: "Low",
      value: "Low"
    },
    {
      label: "Medium",
      value: "Medium"
    },
    {
      label: "High",
      value: "High"
    }
  ]


  
  return (
    <div className="container">
      <h1>Tasks</h1>
      <form onSubmit={addTodo} className="flex">
        <input
          className="input-task"
          type="text"
          value={inputTask}
          onChange={(e) => setInputTask(e.target.value)}
          placeholder="Task"
        />
        <label>Select a priority</label>
        <select className="input"  value={priority} onChange={(e) => setPriority(e.target.value)}  name="priorities">
          {options.map((options) =>(
            <option value={options.value}>{options.label}</option>
            ))}
          </select>

        <button onClick={addTodo} className="task-button">
          Submit
        </button>
      </form>
      <hr className="divisor"/>
    </div>
  );
}

