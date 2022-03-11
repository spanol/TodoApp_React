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
    <div className="container listtasks">
      <div>
      <input className="search-input" onChange={(e)=> {setSearch(e.target.value)}} type="text" placeholder="Find task" />
      </div>
      {task
        .filter((val) => {
          if (search == "") {
            return val;
          } else if (val.content.toLowerCase().includes(search.toLowerCase())) {
            return val;
          }
        })
        .map(({ content, createdAt, isCompleted, priority }, index) => (
          <div className="content">
            <span className=" todo">
              <strong>{content}</strong>
            </span>

            <div>Created at: {createdAt} </div>

            <div>Is completed: {isCompleted ? "True" : "False"}</div>

            <div>Priority: {priority} </div>

            <div className="flex button-container">
              <button
                className="taskbutton delete"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
              <button
                className="taskbutton complete"
                onClick={() => completedTask(index)}
              >
                Complete{" "}
              </button>
              <button
                className="taskbutton edit"
                onClick={() => deleteTask(index)}
              >
                edit{" "}
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}
