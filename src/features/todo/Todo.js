import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, selectTodo } from "./todoSlice";
import styles from "./Todo.module.css";

export function Todo() {
  const todos = useSelector(selectTodo);
  const dispatch = useDispatch();

  return (
    <div>
      <div className={styles.row}>
        <span className={styles.value}>{todos}</span>
      </div>
    </div>
  );
}
