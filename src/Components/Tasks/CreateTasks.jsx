import React from "react";

export function CreateTasks({ addTodo, inputTask, setInputTask, priority, setPriority }) {
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
        <select id="priorities " name="priorities">
          <option value={priority}>asap</option>
          <option value={priority}>cool</option>
          <option value={priority}>go on </option>
        </select>

        <button onClick={addTodo} className="taskbutton">
          Submit Task
        </button>
      </form>
    </div>
  );
}
