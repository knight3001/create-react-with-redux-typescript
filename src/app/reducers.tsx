import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import { todosReducer } from "../features/todo/reducers";
import usersReducer from "../features/users/usersSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todosReducer,
  users: usersReducer,
});

export default rootReducer;
