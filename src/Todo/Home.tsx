import { useState } from "react";
import { Label, Pivot, PivotItem } from "@fluentui/react";
import HomeStyle from "./Home.style";
import TodoString from "./String.json";
import { PivotKeysEnum } from "./Types";

const Home = () => {
    const [selectedKey, setSelectedKey] = useState<string>(PivotKeysEnum.Tasks)
  return (
    <div className={HomeStyle.todoContainer}>
      <header>
        <h2 className={HomeStyle.headerStyle}>{TodoString.header}</h2>
      </header>
      <Pivot
        aria-label="Override Selected Item Pivot Example"
        selectedKey={String(selectedKey)} styles={{root: HomeStyle.pivotRoot}}
        onLinkClick={(item?: PivotItem) => {
           setSelectedKey(item?.props.itemKey || PivotKeysEnum.Tasks)
        }}
      >
        <PivotItem headerText={TodoString.pivots.taskTab} itemKey={PivotKeysEnum.Tasks}>
          <Label>Pivot #1</Label>
        </PivotItem>
        <PivotItem headerText={TodoString.pivots.taskFormTab} itemKey={PivotKeysEnum.TaskForm}>
          <Label>Pivot #2</Label>
        </PivotItem>
        <PivotItem headerText={TodoString.pivots.completedTaskTab} itemKey={PivotKeysEnum.Completed}>
          <Label>Pivot #3</Label>
        </PivotItem>
      </Pivot>
    </div>
  );
};

export default Home;
