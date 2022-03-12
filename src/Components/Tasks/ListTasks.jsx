import React from "react";

export function ListTasks({
  search,
  setSearch,
  task,
  completedTask,
  deleteTask,
  completeTask,
}) {
  return (
    <div className="container list-tasks">
      {task
        .filter((val) => {
          if (search === "") {
            return val;
          } else if (val.content.toLowerCase().includes(search.toLowerCase())) {
            return val;
          }
        })
        .map(({ content, createdAt, isCompleted, priority }, index) => (
          <div className="content">
            <span className="todo">
              <strong>{content}</strong>
            </span>

            <div>Created at: {createdAt} </div>

            <div>Is completed: {isCompleted ? "True" : "False"}</div>

            <div>Priority: {priority} </div>

            <div className="flex button-container">
              <button
                className=" flex task-button delete"
                onClick={() => deleteTask(index)}
              >
                Delete
                <img src="https://img.icons8.com/material-outlined/24/000000/trash--v1.png"/>
              </button>
              <button
                className="flex task-button complete"
                onClick={() => completedTask(index)}
              >
                Change task status 
                <img src="https://img.icons8.com/ios-glyphs/30/000000/checkmark--v1.png"/>
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}
