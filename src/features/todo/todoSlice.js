import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [{ text: "First Todo message", id: 1 }],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
      console.log(state.todos);
    },
  },
});

export const { addTodo } = todoSlice.actions;

export const selectTodo = (state) => state.todo.todos || [];

export default todoSlice.reducer;
