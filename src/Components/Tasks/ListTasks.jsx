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
                className="task-button delete"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
              <button
                className="task-button complete"
                onClick={() => completedTask(index)}
              >
                Edit task status
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}
