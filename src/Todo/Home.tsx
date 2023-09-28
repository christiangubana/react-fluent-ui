import { useState } from "react";
import { Label, Pivot, PivotItem, Stack } from "@fluentui/react";
import HomeStyle from "./Home.style";
import TodoString from "./String.json";
import { PivotKeysEnum } from "./Types";
import TaskList from "./TodoList/TaskList";

const Home = () => {
  const [selectedKey, setSelectedKey] = useState<string>(PivotKeysEnum.Tasks);
  return (
    <Stack className={HomeStyle.todoContainer}>
      <header>
        <h2 className={HomeStyle.headerStyle}>{TodoString.header}</h2>
      </header>
      <Stack className={HomeStyle.pivotContainer}>
        <Pivot
          aria-label="Override Selected Item Pivot Example"
          selectedKey={String(selectedKey)}
          styles={{ root: HomeStyle.pivotRoot }}
          onLinkClick={(item?: PivotItem) => {
            setSelectedKey(item?.props.itemKey || PivotKeysEnum.Tasks);
          }}
        >
          <PivotItem
            headerText={TodoString.pivots.taskTab}
            itemKey={PivotKeysEnum.Tasks}
          >
            <TaskList/>
          </PivotItem>
          <PivotItem
            headerText={TodoString.pivots.taskFormTab}
            itemKey={PivotKeysEnum.TaskForm}
          >
            <Label>Pivot #2</Label>
          </PivotItem>
          <PivotItem
            headerText={TodoString.pivots.completedTaskTab}
            itemKey={PivotKeysEnum.Completed}
          >
            <Label>Pivot #3</Label>
          </PivotItem>
        </Pivot>
      </Stack>
    </Stack>
  );
};

export default Home;
