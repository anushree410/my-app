import { Provider } from "react-redux";
import TaskDisplay from "./TaskDisplay";
import { TaskInput } from "./TaskInput";
import { Task } from "./TaskReducer";
import { TaskStore, useTaskSelector } from "./TaskStore";
function TaskSecondary() {
  const todo: Task[] = useTaskSelector((state) => {
    return state.task.todo;
  });
  const done = useTaskSelector((state) => {
    return state.task.done;
  });
  const cancelled = useTaskSelector((state) => {
    return state.task.cancelled;
  });
  const all_tasks = () => {
    var allTasks: Task[] = [];
    Array.prototype.push.apply(allTasks, todo);
    Array.prototype.push.apply(allTasks, done);
    Array.prototype.push.apply(allTasks, cancelled);
    return allTasks as Task[];
  };
  return (
    <>
      {console.log(all_tasks())}
      <TaskInput tasks={all_tasks()} />
      <TaskDisplay />
    </>
  );
}

function TaskMain() {
  return (
    <Provider store={TaskStore}>
      <h2>To do List</h2>
      <TaskSecondary />
    </Provider>
  );
}
export default TaskMain;
