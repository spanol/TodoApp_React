import React from "react";

export function CreateTasks({ addTodo, inputTask, setInputTask, priority, setPriority }) {
  const options = [
    {
      label: "Select",
      value: ""
    },
    {
      label: "Asap",
      value: "Asap"
    },
    {
      label: "cool",
      value: "cool"
    },
    {
      label: "danger",
      value: "danger"
    }
  ]


  
  return (
    <div className="container">
      <h1>Tasks</h1>
      <form onSubmit={addTodo} className="flex form">
        <input
          className="inputtask"
          type="text"
          value={inputTask}
          onChange={(e) => setInputTask(e.target.value)}
          placeholder="Task"
        />

        
        <label>Select a priority</label>
        <select className="select-task"  value={priority} onChange={(e) => setPriority(e.target.value)}  name="priorities">
          {options.map((options) =>(
          <option value={options.value}>{options.label}</option>
          ))}
          </select>

        <button onClick={addTodo} className="taskbutton">
          Submit Task
        </button>
      </form>
    </div>
  );
}

