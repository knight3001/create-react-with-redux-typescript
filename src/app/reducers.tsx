import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import todosReducer from "../features/todo/todoSlice";
import usersReducer from "../features/users/usersSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
  users: usersReducer,
});

export default rootReducer;
