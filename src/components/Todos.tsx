import { ITodo } from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

interface Props {
  children?: React.ReactNode;
  items: ITodo[];
  onRemoveTodo: (id: string) => void;
}

export function Todos({ items, children, onRemoveTodo }: Props) {
  return (
    <ul className={classes.todos}>
      {items.map((item) => (
        <TodoItem todo={item} key={item.id} onRemoveTodo={onRemoveTodo} />
      ))}
    </ul>
  );
}

export default Todos;
