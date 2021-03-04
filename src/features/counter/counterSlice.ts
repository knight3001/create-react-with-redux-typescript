import {
  createSlice,
  PayloadAction,
  isAnyOf,
  isAsyncThunkAction,
  isRejectedWithValue,
  createAsyncThunk,
  createAction,
} from "@reduxjs/toolkit";
import type { AppThunk, RootState } from "../../app/store";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const manualIncrement = createAction<number>("increment/manual");

export const incrementAsync = createAsyncThunk(
  "incrementAsync",
  async (amount: number, { rejectWithValue }) => {
    if (Math.random() < 0.25) {
      return rejectWithValue({ error: "Random math error" });
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));

    return amount;
  }
);

export const anotherAsyncThunk = createAsyncThunk(
  "anotherAsyncThunk",
  async () => {
    console.log("anotherAsyncThunk");
    return "Hi";
  }
);

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        isAnyOf(incrementAsync.fulfilled, manualIncrement),
        (state, action) => {
          state.value += action.payload;
        }
      )
      .addMatcher(isRejectedWithValue(incrementAsync), (state, action) => {
        console.log("Saw a rejected action incrementAsync action!", action);
      })
      .addMatcher(
        isAsyncThunkAction(anotherAsyncThunk, incrementAsync),
        (state, action) => {
          console.log(
            "I match on everything action dispatched by anotherAsyncThunk or incrementAsync regardless of the lifecycle"
          );
        }
      );
  },
});

export const { decrement } = counterSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
