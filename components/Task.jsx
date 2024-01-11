import React from "react";

const Task = ({ task }) => {
  return (
    <tr className="hover text-zinc-300" key={task.id}>
      <th>{task.id}</th>
      <td>{task.title}</td>
    </tr>
  );
};

export default Task;
