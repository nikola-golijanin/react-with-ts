import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import { useContext } from "react";
import { TodosContext } from "../store/todos-context";

export function Todos() {
  const todoCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todoCtx.items.map((item) => (
        <TodoItem todo={item} key={item.id} onRemoveTodo={todoCtx.removeTodo} />
      ))}
    </ul>
  );
}

export default Todos;
