import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
export type Task = {
  label: string;
  priority: number;
  status: "TODO" | "DONE" | "CANCELLED";
};
const TaskForm = ({ reloadDisplays }: { reloadDisplays: any }) => {
  const [currtask, setTask] = useState("");
  const [currpriority, setPriority] = useState(0);
  const [currstatus, setStatus] = useState<"TODO" | "DONE" | "CANCELLED">(
    "TODO"
  );
  const addTask = () => {
    fetch("http://localhost:9090/task/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        label: currtask,
        priority: currpriority,
        status: currstatus,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(JSON.stringify(data));
        reloadDisplays();
      })
      .catch((e) => alert("Error" + e));
  };
  return (
    <>
      <h2>To do list</h2>
      <form>
        <TextField
          variant="standard"
          label="Task"
          value={currtask}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        ></TextField>
        <TextField
          type="number"
          variant="standard"
          label="Priority"
          value={currpriority}
          onChange={(e) => {
            setPriority(parseInt(e.target.value));
          }}
        ></TextField>
        <FormControl variant="standard" sx={{ minWidth: 120 }}>
          <InputLabel>Status</InputLabel>
          <Select
            value={currstatus}
            onChange={(e) => {
              console.log(e.target.value);
              setStatus(e.target.value as "TODO" | "DONE" | "CANCELLED");
            }}
          >
            <MenuItem value="DONE">Completed</MenuItem>
            <MenuItem value="TODO">To do</MenuItem>
            <MenuItem value="CANCELLED">Cancelled</MenuItem>
          </Select>
        </FormControl>

        <Button variant="contained" onClick={addTask}>
          Add
        </Button>
      </form>
    </>
  );
};

export default TaskForm;
