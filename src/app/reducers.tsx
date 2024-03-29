import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import todosReducer from "../features/todo/todoSlice";
import usersReducer from "../features/users/usersSlice";
import wrappedReducer from "../features/hoc/wrappedSlice";
import { pokemonApi } from "../services/pokemon";
import { api } from "../services/posts";
import { pokemonSlice } from "../services/pokemonSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
  users: usersReducer,
  [pokemonApi.reducerPath]: pokemonApi.reducer,
  test: wrappedReducer,
  [api.reducerPath]: api.reducer,
  pokemon: pokemonSlice.reducer,
});

export default rootReducer;
