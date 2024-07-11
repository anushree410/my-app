import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
// import { createStore } from "redux";
import { TasksSlice } from "./TaskReducer";
export const TaskStore = configureStore({
  reducer: {
    task: TasksSlice.reducer,
  },
});
export const useTaskDispatch: () => typeof TaskStore.dispatch = useDispatch;
export const useTaskSelector: TypedUseSelectorHook<
  ReturnType<typeof TaskStore.getState>
> = useSelector;
