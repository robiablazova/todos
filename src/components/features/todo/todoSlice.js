import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodo: (state, action) => {
      state.todo.push({
        id: Date.now(),
        text: action.payload.text,
      });
    },
    deleteTodo: (state, action) => {
      state.todo = state.todo.id !== action.payload
    }
  },
});

export const { setTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;


