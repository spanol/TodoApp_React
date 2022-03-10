import React from "react";

export function ListTasks({ task, completedTask, deleteTask }) {
  return (
    <div className="container listtasks">
      {task.map(({ content, createdAt, isCompleted }, index) => (
        <div className="content">
          <div className=" todo">
            <strong>{content}</strong>
          </div>

          <div>Created at: {createdAt} </div>

          <div>Is completed: {isCompleted ? "True" : "False"}</div>

          <div>Priority: </div>

          <div className="button-container">
            <button className="taskbutton delete" onClick={() => deleteTask(index)}>Delete</button>
            <button className="taskbutton complete" onClick={() => completedTask(index)}>Complete </button>
            <button className="taskbutton edit" onClick={() => deleteTask(index)}>edit </button>
            {/* edit task */}
          </div>
        </div>
      ))}
    </div>
  );
}
