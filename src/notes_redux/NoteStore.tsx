import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
import { NoteReducer } from "./NoteReducer";
export const NoteStore = createStore(NoteReducer);
