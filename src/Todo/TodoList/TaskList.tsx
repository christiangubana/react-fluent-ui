import React from "react";
import TaskListStyle from "./TaskList.style";
import { Checkbox, FontIcon, Stack } from "@fluentui/react";

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
    return (
      <Stack horizontal key={task.id} className={TaskListStyle.taskItem}>
       <Stack horizontal style={{ width: '85%'}}>
       <Checkbox />
        {task.title}
       </Stack>
        <Stack horizontal style={{ width: '15%'}}>
        <FontIcon iconName="CompassNW" className={TaskListStyle.iconStyle} />
        </Stack>
      </Stack>
    );
  };
  return <div>{tasks.map(onRenderTasks)}</div>;
};

export default TaskList;
