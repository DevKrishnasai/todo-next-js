import Input from "@/components/Input";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <main className="max-w-screen-sm h-screen mx-auto flex flex-col items-center gap-3">
      <h1 className="text-3xl font-bold">Todo App</h1>
      <Input />
      <TodoList />
    </main>
  );
}
