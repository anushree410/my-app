import { Button } from "@mui/material";
import styled from "styled-components";
import { Task, updateStatus, sortTasks } from "./TaskReducer";
import { useTaskDispatch, useTaskSelector } from "./TaskStore";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
const TaskDisplay = () => {
  const SplitDiv = styled.div`
    display: flex;
  `;
  const PartDiv = styled.div`
    flex: 1;
  `;
  const todo: Task[] = useTaskSelector((state) => state.task.todo);
  const done: Task[] = useTaskSelector((state) => state.task.done);
  const cancelled: Task[] = useTaskSelector((state) => state.task.cancelled);
  const dispatch = useTaskDispatch();

  return (
    <>
      <SplitDiv>
        <PartDiv>
          <h2>Todo</h2>
          <Button
            variant="contained"
            onClick={() =>
              dispatch(sortTasks({ status: "TODO", order: "ASC" }))
            }
            sx={{ m: 0.5 }}
          >
            ASC
          </Button>
          <Button
            variant="contained"
            onClick={() =>
              dispatch(sortTasks({ status: "TODO", order: "DES" }))
            }
            sx={{ m: 0.5 }}
          >
            DES
          </Button>
          {todo &&
            todo.map((task) => {
              return (
                <>
                  <TableRow>
                    <TableCell>{task.label}</TableCell>
                    <TableCell>{task.priority}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        onClick={() =>
                          dispatch(
                            updateStatus({
                              update_task: task,
                              to_status: "DONE",
                            })
                          )
                        }
                      >
                        Done
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        onClick={() =>
                          dispatch(
                            updateStatus({
                              update_task: task,
                              to_status: "CANCELLED",
                            })
                          )
                        }
                      >
                        Cancel
                      </Button>
                    </TableCell>
                  </TableRow>
                </>
              );
            })}
        </PartDiv>
        <PartDiv>
          <h2>Done</h2>
          <Button
            variant="contained"
            onClick={() =>
              dispatch(sortTasks({ status: "DONE", order: "ASC" }))
            }
            sx={{ m: 0.5 }}
          >
            ASC
          </Button>
          <Button
            variant="contained"
            onClick={() =>
              dispatch(sortTasks({ status: "DONE", order: "DES" }))
            }
            sx={{ m: 0.5 }}
          >
            DES
          </Button>
          {done &&
            done.map((task) => {
              return (
                <TableRow>
                  <TableCell>{task.label}</TableCell>
                  <TableCell>{task.priority}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      onClick={() =>
                        dispatch(
                          updateStatus({
                            update_task: task,
                            to_status: "TODO",
                          })
                        )
                      }
                    >
                      To do
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      onClick={() =>
                        dispatch(
                          updateStatus({
                            update_task: task,
                            to_status: "CANCELLED",
                          })
                        )
                      }
                    >
                      Cancel
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
        </PartDiv>
        <PartDiv>
          <h2>Cancelled</h2>
          <Button
            variant="contained"
            onClick={() =>
              dispatch(sortTasks({ status: "CANCELLED", order: "ASC" }))
            }
            sx={{ m: 0.5 }}
          >
            ASC
          </Button>
          <Button
            variant="contained"
            onClick={() =>
              dispatch(sortTasks({ status: "CANCELLED", order: "DES" }))
            }
            sx={{ m: 0.5 }}
          >
            DES
          </Button>
          {cancelled &&
            cancelled.map((task) => {
              return (
                <>
                  <TableRow>
                    <TableCell>{task.label}</TableCell>
                    <TableCell>{task.priority}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        onClick={() =>
                          dispatch(
                            updateStatus({
                              update_task: task,
                              to_status: "DONE",
                            })
                          )
                        }
                      >
                        Done
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        onClick={() =>
                          dispatch(
                            updateStatus({
                              update_task: task,
                              to_status: "TODO",
                            })
                          )
                        }
                      >
                        To do
                      </Button>
                    </TableCell>
                  </TableRow>
                </>
              );
            })}
        </PartDiv>
      </SplitDiv>
    </>
  );
};
export default TaskDisplay;
