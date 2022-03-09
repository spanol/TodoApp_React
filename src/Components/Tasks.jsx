import React, { useState } from "react";

export function Tasks() {
  const [task, setTask] = useState({});
  const [inputTask, setInputTask] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (!inputTask) {
      return;
    }
    const newTodo = {
      content: inputTask,
      createdAd: new Date().toLocaleDateString(),
      isCompleted: false,
    };
    setTask((prevList) => [newTodo, ...prevList]);
    setInputTask("");
  };

  const deleteTask = (index) => {
    setTask((prevList) =>
      prevList.filter(
        (listedTask, listedTaskIndex) => listedTaskIndex !== index
      )
    );
  };

  const completedTask = (index) => {
    setTask((prevList) =>
      prevList.map((listedTask, listedTaskIndex) =>
        listedTaskIndex == index
          ? { ...listedTask, isCompleted: listedTask.isCompleted }
          : listedTask
      )
    );
  };

  return (
    <div>
      <h1>Tasks</h1>
      <form onSubmit={}>
        <input type="text" placeholder="Task" />
        <button>Submit Task</button>
      </form>
    </div>
  );
}
