import classes from "./TodoItem.module.css";
import { ITodo } from "../models/todo";

interface Props {
  todo: ITodo;
  onRemoveTodo: (id: string) => void;
}

export default function TodoItem({ todo, onRemoveTodo }: Props) {
  return (
    <li onClick={() => onRemoveTodo(todo.id)} className={classes.item}>
      {todo.text}
    </li>
  );
}
