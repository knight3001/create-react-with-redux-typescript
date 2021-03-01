import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import { todosReducer } from "../features/todo/reducers";

const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todosReducer,
});

export default rootReducer;
