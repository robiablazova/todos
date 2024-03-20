import React, { useState } from "react";
import { useDispatch} from "react-redux";
import {setTodo } from "./features/todo/todoSlice";

const TodoForm = () => {
    const [text, setText] = useState('')
    const dispatch = useDispatch()

    const inputChange = (e) => {
        setText(e.target.value)
    }

    const addTask = () => {
        dispatch(setTodo({text}))
        setText('')
    }
  return (
    <div>
      <input value={text} onChange={inputChange} type="text" />
      <button onClick={addTask}>Add</button>
    </div>
  );
};

export default TodoForm;

