import { MenuItem, TextField } from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styles from "./ToDoList.module.css";
// import Box from "@mui/material/Box";

import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
type Task = {
  label: string;
  priority: number;
  status: "TODO" | "DONE" | "CANCELLED";
};
// WITHOUT REDUX
export const ToDoList = () => {
  const [todoList, setTodoList] = useState<Task[]>([
    {
      label: "react",
      priority: 2,
      status: "TODO",
    },
  ]);
  const [doneList, setDoneList] = useState<Task[]>([
    {
      label: "typescript",
      priority: 1,
      status: "DONE",
    },
  ]);
  const [cancelList, setCancelList] = useState<Task[]>([
    {
      label: "material ui",
      priority: 3,
      status: "CANCELLED",
    },
  ]);
  const [currtask, setTask] = useState("");
  const [currpriority, setPriority] = useState(0);
  const [currstatus, setStatus] = useState<"TODO" | "DONE" | "CANCELLED">(
    "TODO"
  );

  const display = (i: Task) => {
    return (
      <TableRow>
        <TableCell>{i.label}</TableCell>
        <TableCell>{i.priority}</TableCell>
        {i.status !== ("CANCELLED" as "TODO" | "DONE" | "CANCELLED") && (
          <TableCell>
            <Button
              style={{
                maxWidth: "75px",
                maxHeight: "20px",
                minWidth: "75px",
                minHeight: "20px",
              }}
              sx={{ m: 0.5 }}
              variant="outlined"
              onClick={(e) => {
                const og = i.status === "TODO" ? todoList : doneList;
                const newOne = og.filter((t) => t.label !== i.label);
                if (i.status === "TODO") {
                  setTodoList(newOne);
                } else {
                  setDoneList(newOne);
                }
                setCancelList([
                  ...cancelList,
                  {
                    label: i.label,
                    priority: i.priority,
                    status: "CANCELLED",
                  },
                ]);
              }}
            >
              Cancel
            </Button>
          </TableCell>
        )}
        {i.status !== ("TODO" as "TODO" | "DONE" | "CANCELLED") && (
          <TableCell>
            <Button
              style={{
                maxWidth: "80px",
                maxHeight: "20px",
                minWidth: "80px",
                minHeight: "20px",
              }}
              sx={{ m: 0.5 }}
              variant="outlined"
              onClick={(e) => {
                const og = i.status === "DONE" ? doneList : cancelList;
                const newOne = og.filter((t) => t.label !== i.label);
                if (i.status === "DONE") {
                  setDoneList(newOne);
                } else {
                  setCancelList(newOne);
                }
                setTodoList([
                  ...todoList,
                  {
                    label: i.label,
                    priority: i.priority,
                    status: "TODO",
                  },
                ]);
              }}
            >
              To do
            </Button>
          </TableCell>
        )}
        {i.status !== ("DONE" as "TODO" | "DONE" | "CANCELLED") && (
          <TableCell>
            <Button
              style={{
                maxWidth: "90px",
                maxHeight: "20px",
                minWidth: "90px",
                minHeight: "20px",
              }}
              sx={{ m: 0.5 }}
              variant="outlined"
              onClick={(e) => {
                const og = i.status === "TODO" ? todoList : cancelList;
                const newOne = og.filter((t) => t.label !== i.label);
                if (i.status === "TODO") {
                  setTodoList(newOne);
                } else {
                  setCancelList(newOne);
                }
                setDoneList([
                  ...doneList,
                  {
                    label: i.label,
                    priority: i.priority,
                    status: "DONE",
                  },
                ]);
              }}
            >
              Complete
            </Button>
          </TableCell>
        )}
      </TableRow>
    );
  };
//   const display2 = (i: Task) => {
//     return (s
//       <li>
//         {i.label} ( {i.priority} )
//       </li>
//     );
//   };
  const addTask = () => {
    if (
      todoList.findIndex((t) => t.label === currtask) !== -1 ||
      doneList.findIndex((t) => t.label === currtask) !== -1 ||
      cancelList.findIndex((t) => t.label === currtask) !== -1
    ) {
      alert("Task already exists");
    } else {
      if (currstatus === "TODO") {
        setTodoList([
          ...todoList,
          {
            label: currtask,
            priority: currpriority,
            status: currstatus,
          },
        ]);
      } else if (currstatus === "DONE") {
        setDoneList([
          ...doneList,
          {
            label: currtask,
            priority: currpriority,
            status: currstatus,
          },
        ]);
      } else {
        setCancelList([
          ...cancelList,
          {
            label: currtask,
            priority: currpriority,
            status: currstatus,
          },
        ]);
      }
    }
  };

  return (
    <div>
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

      <hr />
      <div className={styles.splitScreen}>
        <div className={styles.leftPane}>
          <h3 style={{ display: "inline" }}>To Do tasks</h3>
          <Button
            variant="contained"
            sx={{ m: 0.5 }}
            style={{ display: "inline" }}
            onClick={() => {
              setTodoList(
                todoList
                  .sort((a, b) => (a.priority < b.priority ? -1 : 1))
                  .slice()
              );
            }}
          >
            Asc
          </Button>
          <Button
            variant="contained"
            sx={{ m: 0.5 }}
            style={{ display: "inline" }}
            onClick={() => {
              setTodoList(
                todoList
                  .sort((a, b) => (a.priority > b.priority ? -1 : 1))
                  .slice()
              );
            }}
          >
            Des
          </Button>
          {todoList.map(display)}
        </div>
        <div className={styles.centerPane}>
          <h3 style={{ display: "inline" }}>Completed tasks</h3>
          <Button
            variant="contained"
            sx={{ m: 0.5 }}
            style={{ display: "inline" }}
            onClick={() => {
              setDoneList(
                doneList
                  .sort((a, b) => (a.priority < b.priority ? -1 : 1))
                  .slice()
              );
            }}
          >
            Asc
          </Button>
          <Button
            variant="contained"
            sx={{ m: 0.5 }}
            style={{ display: "inline" }}
            onClick={() => {
              setDoneList(
                doneList
                  .sort((a, b) => (a.priority > b.priority ? -1 : 1))
                  .slice()
              );
            }}
          >
            Des
          </Button>
          {doneList.map(display)}
        </div>
        <div className={styles.rightPane}>
          <h3 style={{ display: "inline" }}>Cancelled tasks</h3>
          <Button
            variant="contained"
            sx={{ m: 0.5 }}
            style={{ display: "inline" }}
            onClick={() => {
              setCancelList(
                cancelList
                  .sort((a, b) => (a.priority < b.priority ? -1 : 1))
                  .slice()
              );
            }}
          >
            Asc
          </Button>
          <Button
            variant="contained"
            sx={{ m: 0.5 }}
            style={{ display: "inline" }}
            onClick={() => {
              setCancelList(
                cancelList
                  .sort((a, b) => (a.priority > b.priority ? -1 : 1))
                  .slice()
              );
            }}
          >
            Des
          </Button>
          {cancelList.map(display)}
        </div>
      </div>
    </div>
  );
};
