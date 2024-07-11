import React, { useState } from "react";
import Display from "./Display";
import TaskForm, { Task } from "./TaskForm";

function SpringTaskMain() {
  const [todo, setTodo] = useState<Task[]>();
  const [done, setDone] = useState<Task[]>();
  const [cancelled, setCancelled] = useState<Task[]>();
  // useEffect(() => {
  //   fetch("http://localhost:9090/task/getByStatus/TODO")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setTodo(res);
  //     });
  //   fetch("http://localhost:9090/task/getByStatus/DONE")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setDone(res);
  //     });
  //   fetch("http://localhost:9090/task/getByStatus/CANCELLED")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setCancelled(res);
  //     });
  // });
  const reloadTodo = () => {
    fetch("http://localhost:9090/task/getByStatus/TODO")
      .then((res) => res.json())
      .then((res) => {
        setTodo(res);
      });
  };
  const reloadDone = () => {
    fetch("http://localhost:9090/task/getByStatus/DONE")
      .then((res) => res.json())
      .then((res) => {
        setDone(res);
      });
  };
  const reloadCancelled = () => {
    fetch("http://localhost:9090/task/getByStatus/CANCELLED")
      .then((res) => res.json())
      .then((res) => {
        setCancelled(res);
      });
  };
  const reloadDisplays = () => {
    reloadTodo();
    reloadDone();
    reloadCancelled();
  };
  return (
    <>
      <TaskForm reloadDisplays={reloadDisplays} />
      <Display
        todo={todo}
        done={done}
        cancelled={cancelled}
        setTodo={setTodo}
        setDone={setDone}
        setCancelled={setCancelled}
        reloadDisplays={reloadDisplays}
      />
    </>
  );
}

export default SpringTaskMain;
