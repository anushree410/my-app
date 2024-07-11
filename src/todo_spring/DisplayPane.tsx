import { Button, TableCell, TableRow } from "@mui/material";
import { Task } from "./TaskForm";

const DisplayPane = ({
  title,
  taskList,
  setTaskList,
  b_label,
  reloadDisplays,
}: {
  title: string;
  taskList: Task[] | undefined;
  setTaskList: React.Dispatch<React.SetStateAction<Task[] | undefined>>;
  b_label: string[];
  reloadDisplays: any;
}) => {
  return (
    <>
      <h2>{title}</h2>
      <Button
        variant="contained"
        onClick={() => {
          if (taskList) {
            setTaskList(
              taskList
                .sort((a, b) => (a.priority < b.priority ? -1 : 1))
                .slice()
            );
          }
        }}
        sx={{ m: 0.5 }}
      >
        ASC
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          if (taskList) {
            setTaskList(
              taskList
                .sort((a, b) => (a.priority > b.priority ? -1 : 1))
                .slice()
            );
          }
        }}
        sx={{ m: 0.5 }}
      >
        DES
      </Button>
      {taskList &&
        taskList.map((task) => {
          return (
            <>
              <TableRow>
                <TableCell>{task.label}</TableCell>
                <TableCell>{task.priority}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    onClick={() => {
                      fetch(
                        `http://localhost:9090/task/updateTaskById/${task.label}`,
                        {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({
                            label: task.label,
                            priority: task.priority,
                            status: b_label[0],
                          }),
                        }
                      )
                        .then((response) => response.json())
                        .then(() => {
                          //reload
                          reloadDisplays();
                        });
                    }}
                  >
                    {b_label[0]}
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    onClick={() => {
                      fetch(
                        `http://localhost:9090/task/updateTaskById/${task.label}`,
                        {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({
                            label: task.label,
                            priority: task.priority,
                            status: b_label[1],
                          }),
                        }
                      )
                        .then((response) => response.json())
                        .then(() => {
                          //reload
                          reloadDisplays();
                        });
                    }}
                  >
                    {b_label[1]}
                  </Button>
                </TableCell>
              </TableRow>
            </>
          );
        })}
    </>
  );
};

export default DisplayPane;
