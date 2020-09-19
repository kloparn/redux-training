import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, selectTodo } from "./todoSlice";
import styles from "./Todo.module.css";

export function Todo() {
  const todos = useSelector(selectTodo);
  // const todos = (selectTodo) => selectTodo.state.todo;
  const dispatch = useDispatch();
  console.log("todos:", todos);

  return (
    <div>
      <div className={styles.row}>
        <span className={styles.value}>
          This is a [
          {todos.map((todo) => (
            <div key={todo.id}>{todo.text}</div>
          ))}
          ] state
          <br></br>
          <button
            className={styles.button}
            aria-label="add todo"
            onClick={() =>
              dispatch(
                addTodo({
                  text: "new item",
                  id: Math.floor(Math.random() * 10000),
                })
              )
            }
          >
            Add new todo
          </button>
        </span>
      </div>
    </div>
  );
}
