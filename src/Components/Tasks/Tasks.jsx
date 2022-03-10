import React, { useEffect, useState } from "react";

import { ListTasks } from "./ListTasks";
import { CreateTasks } from "./CreateTasks";

export function Tasks() {
  const [task, setTask] = useState(() => {
    const getStoredTasks = localStorage.getItem("tasks");
    if (getStoredTasks) {
      return JSON.parse(getStoredTasks);
    } else {
      return [];
    }
  });
  const [inputTask, setInputTask] = useState("");
  const [priority, setPriority] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (!inputTask) {
      return;
    }
    const newTodo = {
      content: inputTask,
      createdAt: new Date().toLocaleDateString(),
      isCompleted: false,
      priority: priority,
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
    // <div className="container">
    <>
      <CreateTasks
        addTodo={addTodo}
        inputTask={inputTask}
        setInputTask={setInputTask}
      />

      <ListTasks
        task={task}
        completedTask={completedTask}
        deleteTask={deleteTask}
      />
    </>
    // </div>
  );
}
