import React from "react";
import TaskListStyle from "./TaskList.style";

interface ITaskProps {
  id: number;
  title: string;
}

const TaskList = () => {
  const tasks: ITaskProps[] = [
    {
      id: 1,
      title: "Task 1",
    },
    {
      id: 2,
      title: "Task 2",
    },
  ];
  const onRenderTasks = (task: ITaskProps) => {
    return <div key={task.id}>{task.title}</div>;
  };
  return <div className={TaskListStyle.taskItem}>{tasks.map(onRenderTasks)}</div>;
};

export default TaskList;
