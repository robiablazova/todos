import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "./features/todo/todoSlice";

const TodoList = () => {
    const todos = useSelector(state => state.todos.todo)
    const dispatch = useDispatch()

    const deleteHandler = (id) => {
      dispatch(deleteTodo(id))
    }
  return (
      <ul>
        {todos.map((el) => (
            <li key={el.id}>{el.text}
            <button onClick={() => deleteHandler(deleteTodo(el.id))}>Delete</button></li>
        ))}
      </ul>
  );
};

export default TodoList;


