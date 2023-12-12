import { useRef } from "react";
import { ITodo } from "../models/todo";
import classes from "./NewTodo.module.css";

interface Props {
  todoHandler: (newTodo: ITodo) => void;
}

export function NewTodo({ todoHandler }: Props) {
  const textRef = useRef<HTMLInputElement>(null);

  function formHandler(event: React.FormEvent) {
    event.preventDefault();
    const text = textRef.current?.value;

    if (text === undefined || text.trim().length === 0) {
      console.log("EMPTY");
    } else {
      const newTodo: ITodo = {
        id: Math.random().toString(),
        text: text,
      };

      todoHandler(newTodo);
      textRef.current!.value = "";
    }
  }

  return (
    <form onSubmit={formHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={textRef} />
      <button>Add Todo</button>
    </form>
  );
}
