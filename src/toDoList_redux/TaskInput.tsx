import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
import { addTask, Task } from "./TaskReducer";
import { useTaskDispatch } from "./TaskStore";
import React from "react";
interface InputProps {
  tasks: Task[];
}
export const TaskInput: React.FC<InputProps> = ({ tasks }) => {
  const [currtask, setCurrTask] = React.useState("");
  const [priority, setPriority] = React.useState(0);
  const [status, setStatus] = React.useState("");
  const dispatch = useTaskDispatch();
  const onClickAddTask = () => {
    if (!currtask || !status) {
      alert("one or more fields empty");
      return;
    }
    if (tasks.findIndex((t) => t.label === currtask) !== -1) {
      alert("Task already exists");
      return;
    }
    const t: Task = {
      label: currtask,
      priority: priority,
      status: status,
    };
    dispatch(addTask({ task: t }));
    setCurrTask("");
    setPriority(0);
    setStatus("");
  };
  return (
    <div>
      <TextField
        variant="standard"
        label="Task"
        value={currtask}
        onChange={(e) => {
          setCurrTask(e.target.value);
        }}
      ></TextField>
      <TextField
        type="number"
        variant="standard"
        label="Priority"
        value={priority}
        onChange={(e) => {
          setPriority(parseInt(e.target.value));
        }}
      ></TextField>
      <FormControl variant="standard" sx={{ minWidth: 120 }}>
        <InputLabel>Status</InputLabel>
        <Select
          value={status}
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
      <Button variant="contained" onClick={onClickAddTask}>
        Add
      </Button>
    </div>
  );
};
