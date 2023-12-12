import { ITodo } from "../models/todo";
import React, { useState } from "react";

interface Context {
  items: ITodo[];
  addTodo: (newTodo: ITodo) => void;
  removeTodo: (id: string) => void;
}

interface Props {
  children?: React.ReactNode;
}

export const TodosContext = React.createContext<Context>({
  items: [],
  addTodo: (newTodo: ITodo) => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC = (props: Props) => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  function addTodoHandler(newTodo: ITodo): void {
    setTodos((prev) => {
      return prev.concat(newTodo);
    });
  }

  function removeTodoHandler(id: string) {
    setTodos((prev) => {
      return prev.filter((prev) => prev.id !== id);
    });
  }

  const contextValue: Context = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
