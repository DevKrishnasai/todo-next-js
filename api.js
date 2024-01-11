export const getTasks = async () => {
  return await fetch("http://localhost:3001/tasks").then((res) => res.json());
};
