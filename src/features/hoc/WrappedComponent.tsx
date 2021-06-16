import React from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  start,
  success,
  magic,
  wrappedData,
  wrappedStatus,
} from "./wrappedSlice";

function WrappedComponent() {
  const data = useAppSelector(wrappedData);
  const status = useAppSelector(wrappedStatus);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>
        <button type="button" onClick={() => dispatch(start())}>
          Start
        </button>
        <button type="button" onClick={() => dispatch(magic())}>
          Magic
        </button>
        <button type="button" onClick={() => dispatch(success("yes ok"))}>
          Success
        </button>
      </div>
      {status}
      {data}
    </div>
  );
}

export default WrappedComponent;
