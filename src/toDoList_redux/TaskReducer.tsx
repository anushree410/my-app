import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Task = {
  label: string;
  priority: number;
  status: string;
};
export type TasksState = {
  done: Task[];
  todo: Task[];
  cancelled: Task[];
};
const initialState: TasksState = {
  done: [],
  todo: [
    { label: "typescript", priority: 2, status: "TODO" },
    { label: "material-ui", priority: 1, status: "TODO" },
    { label: "redux", priority: 3, status: "TODO" },
  ],
  cancelled: [],
};
export const TasksSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<{ task: Task }>) => {
      if (action.payload.task.status === "TODO")
        state.todo.push(action.payload.task);
      else if (action.payload.task.status === "DONE")
        state.done.push(action.payload.task);
      else {
        state.cancelled.push(action.payload.task);
      }
    },
    updateStatus: (
      state,
      action: PayloadAction<{ update_task: Task; to_status: string }>
    ) => {
      if (action.payload.update_task.status === "TODO") {
        state.todo = state.todo.filter(
          (t) => t.label !== action.payload.update_task.label
        );
      } else if (action.payload.update_task.status === "DONE") {
        state.done = state.done.filter(
          (t) => t.label !== action.payload.update_task.label
        );
      } else {
        state.cancelled = state.cancelled.filter(
          (t) => t.label !== action.payload.update_task.label
        );
      }
      const new_task: Task = {
        ...action.payload.update_task,
        status: action.payload.to_status,
      };
      if (action.payload.to_status === "DONE") {
        state.done.push(new_task);
      } else if (action.payload.to_status === "TODO") {
        state.todo.push(new_task);
      } else {
        state.cancelled.push(new_task);
      }
    },
    sortTasks: (
      state,
      action: PayloadAction<{ status: string; order: string }>
    ) => {
      if (action.payload.status === "TODO") {
        state.todo.sort((a, b) =>
          action.payload.order === "ASC"
            ? a.priority < b.priority
              ? -1
              : 1
            : a.priority > b.priority
            ? -1
            : 1
        );
      } else if (action.payload.status === "DONE") {
        state.done.sort((a, b) =>
          action.payload.order === "ASC"
            ? a.priority < b.priority
              ? -1
              : 1
            : a.priority > b.priority
            ? -1
            : 1
        );
      } else {
        state.cancelled.sort((a, b) =>
          action.payload.order === "ASC"
            ? a.priority < b.priority
              ? -1
              : 1
            : a.priority > b.priority
            ? -1
            : 1
        );
      }
    },
  },
});
export default TasksSlice.reducer;
export const { addTask } = TasksSlice.actions;
export const { sortTasks } = TasksSlice.actions;
export const { updateStatus } = TasksSlice.actions;
