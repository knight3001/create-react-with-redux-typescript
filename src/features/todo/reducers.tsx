import { createReducer, createAction, PayloadAction } from "@reduxjs/toolkit";

interface Item {
  index: number;
  completed: boolean;
}

const initialState: Array<Item> = [];

const ADD_TODO = createAction<Item, "ADD_TODO">("ADD_TODO");
const TOGGLE_TODO = createAction<Item, "TOGGLE_TODO">("TOGGLE_TODO");
const REMOVE_TODO = createAction<Item, "REMOVE_TODO">("REMOVE_TODO");

export const todosReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(ADD_TODO, (state, action: PayloadAction<Item>) => {
      // "mutate" the array by calling push()
      state.push(action.payload);
    })
    .addCase(TOGGLE_TODO, (state, action: PayloadAction<Item>) => {
      const todo = state[action.payload.index];
      // "mutate" the object by overwriting a field
      todo.completed = !todo.completed;
    })
    .addCase(REMOVE_TODO, (state, action: PayloadAction<Item>) =>
      // Can still return an immutably-updated value if we want to
      state.filter((todo, i) => i !== action.payload.index)
    );
});
