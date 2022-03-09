import React, { useState } from "react";

export function Tasks() {
  const [task, setTask] = useState([]);
  const [inputTask, setInputTask] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (!inputTask) {
      return;
    }
    const newTodo = {
      content: inputTask,
      createdAt: new Date().toLocaleDateString(),
      isCompleted: false,
    };
    setTask((prevTask) => [newTodo, ...prevTask]);
    setInputTask("");
  };

  const deleteTask = (index) => {
    setTask((prevTask) =>
      prevTask.filter(
        (listedTask, listedTaskIndex) => listedTaskIndex !== index
      )
    );
  };

  const completedTask = (index) => {
    setTask((prevTask) =>
      prevTask.map((listedTask, listedTaskIndex) =>
        listedTaskIndex == index
          ? { ...listedTask, isCompleted: listedTask.isCompleted }
          : listedTask
      )
    );
  };

  return (
    <div>
      <h1>Tasks</h1>
      <form onSubmit={addTodo}>
        <input type="text" 
        value={inputTask}
        onChange={(e)=> setInputTask(e.target.value)}
        placeholder="Task" />
        <button onclick={addTodo}>Submit Task</button>
      </form>

      <div>
        {task.map(({content, createdAt,
        isCompleted},index) =>(
          <div className="wrapper">
            <div className="content">
              <div className=" todo"> 
              {content}
              </div>

              <div>
                Created at:{createdAt}
              </div>

              <div onclick={()=> deleteTask(index)}>
                Delete
              </div>

              </div>
            </div>
        ))}
      </div>
    </div>
  );
}
