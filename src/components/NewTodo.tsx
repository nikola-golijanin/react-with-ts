import { useContext, useRef } from "react";
import { ITodo } from "../models/todo";
import classes from "./NewTodo.module.css";
import { TodosContext } from "../store/todos-context";

export function NewTodo() {
  const todoCtx = useContext(TodosContext);
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

      todoCtx.addTodo(newTodo);
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
