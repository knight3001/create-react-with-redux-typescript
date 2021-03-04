import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState, AppDispatch } from "../../app/store";

interface LoginUserType {
  id: string;
  email: string;
  hasPassword: boolean | null;
  name: string;
  pin: string | null;
  roles: Array<string>;
}

interface ThunkAPI {
  dispatch: Function;
  getState: Function;
  extra: { jwt: string };
  requestId: string;
  signal: AbortSignal;
  rejectedWithValue: boolean;
}

interface TodoType {
  id: string;
  title: string;
  completed: boolean;
}

type FetchTodosError = {
  message: string;
};

type TodosState = {
  // In `status` we will watch
  // if todos are being loaded.
  status: "loading" | "idle";

  // `error` will contain an error message.
  error: string | null;
  todo: LoginUserType | null;
};

export function authHeader(): HeadersInit {
  const requestHeaders: HeadersInit = new Headers();
  const token = localStorage.getItem("token");

  if (token !== null) {
    requestHeaders.set("Authorization", `Bearer ${token}`);
  }

  return requestHeaders;
}

export const fetchTodos = createAsyncThunk<
  LoginUserType,
  number,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: {
      jwt: string;
    };
    rejectValue: FetchTodosError;
  }
>("todos/fetch", async (limit: number, thunkApi) => {
  // const response = await userAPI.fetchAll();
  const response = await fetch(
    "https://localhost:44348/api/v2/users/authenticate",
    {
      headers: {
        Authorization: `Bearer ${thunkApi.extra.jwt}`,
      },
    }
  );
  if (response.status !== 200) {
    return thunkApi.rejectWithValue({
      message: "Failed to fetch todos.",
    });
  }
  const data: LoginUserType = await response.json();
  return data;
});

const initialState: TodosState = {
  todo: null,
  error: null,
  status: "idle",
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // ...
  },
  // In `extraReducers` we declare
  // all the actions:
  extraReducers: (builder) => {
    // When we send a request,
    // `fetchTodos.pending` is being fired:
    builder.addCase(fetchTodos.pending, (state) => {
      // At that moment,
      // we change status to `loading`
      // and clear all the previous errors:
      state.status = "loading";
      state.error = null;
    });

    // When a server responses with the data,
    // `fetchTodos.fulfilled` is fired:
    builder.addCase(fetchTodos.fulfilled, (state, { payload }) => {
      // We add all the new todos into the state
      // and change `status` back to `idle`:
      state.todo = payload;
      state.status = "idle";
    });

    // When a server responses with an error:
    builder.addCase(fetchTodos.rejected, (state, { payload }) => {
      // We show the error message
      // and change `status` back to `idle` again.
      if (payload) state.error = payload.message;
      state.status = "idle";
    });
  },
});

export const selectStatus = (state: RootState) => state.todos.status;
export const todoError = (state: RootState) => state.todos.error;

export default todosSlice.reducer;
