import "./App.css";
import Todos from "./components/Todos";
import { ITodo } from "./models/todo";
import { NewTodo } from "./components/NewTodo";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  function addTodo(newTodo: ITodo): void {
    setTodos((prev) => {
      return prev.concat(newTodo);
    });
  }

  function removeTodo(id: string) {
    setTodos((prev) => {
      return prev.filter((prev) => prev.id !== id);
    });
  }

  return (
    <div>
      <Todos items={todos} onRemoveTodo={removeTodo} />
      <NewTodo todoHandler={addTodo} />
    </div>
  );
}

export default App;
