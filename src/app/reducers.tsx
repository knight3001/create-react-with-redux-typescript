import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import todosReducer from "../features/todo/todoSlice";
import usersReducer from "../features/users/usersSlice";
import { pokemonApi } from "../services/pokemon";

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
  users: usersReducer,
  [pokemonApi.reducerPath]: pokemonApi.reducer,
});

export default rootReducer;
