import { IProcessedStyleSet, IStyle, mergeStyleSets } from "@fluentui/react";

interface ITaskListStyle {
  taskItem: IStyle;
  iconStyle: IStyle;
}

const TaskListStyle: IProcessedStyleSet<ITaskListStyle> = mergeStyleSets({
  taskItem: {
    maxHeight: 50,
    minHeight: 30,
    padding: 10,
    width: "100%",
    backgroundColor: "lavender",
    selectors: {
      "&:hover": { background: "rgb(243, 242, 241)" },
    },
    margin: 5,
    display: "flex",
    alignItems: "center",
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
  },
  iconStyle: {
    fontSize: 30,
    margin: "0 5px",
    selectors: {
        "&:hover": { cursor: 'pointer' },
      },
  },
});

export default TaskListStyle;
