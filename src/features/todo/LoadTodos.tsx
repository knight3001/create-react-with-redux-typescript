import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectStatus, fetchTodos } from "./todoSlice";

function LoadTodos() {
  const dispatch = useAppDispatch();

  // Get the current `status`:
  const status = useAppSelector(selectStatus);

  // When clicked, dispatch `fetchTodos`:
  const handleClick = () => dispatch(fetchTodos(3));

  return (
    // Change the button text
    // depending on the current `status`:
    <button type="button" onClick={handleClick}>
      {status === "loading" ? "Loading todos..." : "Load todos"}
    </button>
  );
}

export default LoadTodos;
