import React from "react";

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
  const onRenderTasks = (task: any) => {
    return <div key={task.id}>{task.title}</div>;
  };
  return <div>{tasks.map(onRenderTasks)}</div>;
};

export default TaskList;
