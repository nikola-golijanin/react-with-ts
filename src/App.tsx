import Todos from "./components/Todos";
import { NewTodo } from "./components/NewTodo";
import TodosContextProvider from "./store/todos-context";
import React from "react";

function App() {
  return (
    <TodosContextProvider>
      <Todos />
      <NewTodo />
    </TodosContextProvider>
  );
}

export default App;
