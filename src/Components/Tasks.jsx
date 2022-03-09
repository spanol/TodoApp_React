import React, { useEffect, useState } from "react";

export function Tasks() {
  const [task, setTask] = useState(() => {
    const getStoredTask = localStorage.getItem("tasks");
    if (getStoredTask) {
      return JSON.parse(getStoredTask);
    } else {
      return [];
    }
  });
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
        listedTaskIndex === index
          ? { ...listedTask, isCompleted: listedTask.isCompleted }
          : listedTask
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task));
  }, [task]);

  return (
    <div>
      <h1>Tasks</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={inputTask}
          onChange={(e) => setInputTask(e.target.value)}
          placeholder="Task"
        />
        <button onClick={addTodo}>Submit Task</button>
      </form>

      <div>
        {task.map(({ content, createdAt, isCompleted }, index) => (
          <div className="wrapper">
            <div className="content">
              <div className=" todo" onClick={completedTask}>
                {content}
              </div>

              <div>Created at:{createdAt}</div>

              <div>Is completed: {isCompleted ? "True" : "False"}</div>

              <div onClick={() => deleteTask(index)}>Delete</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
