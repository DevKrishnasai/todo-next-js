import { getTasks } from "@/api";
import Task from "./Task";

const TodoList = async () => {
  const tasks = await getTasks();
  //   console.log(list);
  return (
    <div className="overflow-x-auto w-full">
      <table className="table">
        <thead>
          <tr>
            <th>TASKS</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => {
            return <Task task={task} key={task.id} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
