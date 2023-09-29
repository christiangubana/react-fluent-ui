import React from "react";
import TaskListStyle from "./TaskList.style";
import { Checkbox, FontIcon, Stack } from "@fluentui/react";

interface ITaskProps {
  id: number;
  title: string;
  isFav: boolean;
}

const TaskList = () => {
  const tasks: ITaskProps[] = [
    {
      id: 1,
      title: "Task 1",
      isFav: true
    },
    {
      id: 2,
      title: "Task 2",
      isFav: false
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
        <FontIcon iconName="Info" className={TaskListStyle.iconStyle} />
        <FontIcon iconName={task.isFav ? 'FavoriteStar' : 'FavoriteStarFill'} className={TaskListStyle.iconStyle} />
        <FontIcon iconName="EditNote" className={TaskListStyle.iconStyle} />
        <FontIcon iconName="Delete" className={TaskListStyle.iconStyle} />
        </Stack>
      </Stack>
    );
  };
  return <div>{tasks.map(onRenderTasks)}</div>;
};

export default TaskList;
