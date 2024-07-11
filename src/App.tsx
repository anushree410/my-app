import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { BMIElement } from "./components/BMIElement";
import Navbar from "./components/Navbar";
import { ToDoList } from "./components/ToDoList";
import NoteMain from "./notes_redux/NoteMain";
import TaskMain from "./toDoList_redux/TaskMain";
import SpringTaskMain from "./todo_spring/SpringTaskMain";
function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
        <Route path="/bmi_calc" element={<BMIElement />} />
        <Route path="/todo" element={<ToDoList />} />
        <Route path="/todo_redux" element={<TaskMain />} />
        <Route path="/notes" element={<NoteMain />} />
        <Route path="/todo_spring" element={<SpringTaskMain />} />
         </Routes>

    </div>
  );
}

export default App;
