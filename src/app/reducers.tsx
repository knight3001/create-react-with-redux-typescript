import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import todosReducer from "../features/todo/todoSlice";
import usersReducer from "../features/users/usersSlice";
import { pokemanApi } from "../services/pokemon";

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
  users: usersReducer,
  [pokemanApi.reducerPath]: pokemanApi.reducer,
});

export default rootReducer;
