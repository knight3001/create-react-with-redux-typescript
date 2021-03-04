import React, { Fragment } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectStatus, fetchTodos, todoError } from "./todoSlice";

function LoadTodos() {
  const dispatch = useAppDispatch();

  // Get the current `status`:
  const status = useAppSelector(selectStatus);
  const error = useAppSelector(todoError);

  // When clicked, dispatch `fetchTodos`:
  const handleClick = () => dispatch(fetchTodos(3));

  return (
    // Change the button text
    // depending on the current `status`:
    <>
      <button type="button" onClick={handleClick}>
        Load todos
      </button>
      {status}
      {error}
    </>
  );
}

export default LoadTodos;
