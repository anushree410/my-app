// import { useEffect, useState } from "react";
import DisplayPane from "./DisplayPane";
import { Task } from "./TaskForm";

function Display({
  todo,
  done,
  cancelled,
  setTodo,
  setDone,
  setCancelled,
  reloadDisplays,
}: {
  todo: Task[] | undefined;
  done: Task[] | undefined;
  cancelled: Task[] | undefined;
  setTodo: React.Dispatch<React.SetStateAction<Task[] | undefined>>;
  setDone: React.Dispatch<React.SetStateAction<Task[] | undefined>>;
  setCancelled: React.Dispatch<React.SetStateAction<Task[] | undefined>>;
  reloadDisplays: any;
}) {
  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <DisplayPane
            title="To do"
            taskList={todo}
            b_label={["DONE", "CANCELLED"]}
            setTaskList={setTodo}
            reloadDisplays={reloadDisplays}
          />
        </div>
        <div style={{ flex: 1 }}>
          <DisplayPane
            title="Done"
            taskList={done}
            b_label={["TODO", "CANCELLED"]}
            setTaskList={setDone}
            reloadDisplays={reloadDisplays}
          />
        </div>
        <div style={{ flex: 1 }}>
          <DisplayPane
            title="Cancelled"
            taskList={cancelled}
            b_label={["TODO", "DONE"]}
            setTaskList={setCancelled}
            reloadDisplays={reloadDisplays}
          />
        </div>
      </div>
    </>
  );
}

export default Display;
