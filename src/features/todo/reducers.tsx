// @ts-nocheck
import { createReducer, createAction } from "@reduxjs/toolkit";
import type { RootState, AppThunk } from "../../app/store";

const initialState: Array<string> = [];

const actionCreator = createAction("ADD_TODO");

export const todosReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actionCreator, (state, action) => {
      // "mutate" the array by calling push()
      state.push(action.payload);
    })
    .addCase("TOGGLE_TODO", (state, action) => {
      const todo = state[action.payload.index];
      // "mutate" the object by overwriting a field
      todo.completed = !todo.completed;
    })
    .addCase("REMOVE_TODO", (state, action) =>
      // Can still return an immutably-updated value if we want to
      state.filter((todo, i) => i !== action.payload.index)
    );
});
