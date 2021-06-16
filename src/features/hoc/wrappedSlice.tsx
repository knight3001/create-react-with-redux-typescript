import createGenericSlice, {
  GenericState,
} from "../../app/global/CreateGenericSlice";
import type { AppThunk, RootState } from "../../app/store";

export const wrappedSlice = createGenericSlice({
  name: "test",
  initialState: { status: "loading" } as GenericState<string>,
  reducers: {
    magic(state) {
      state.status = "finished";
      state.data = "hocus pocus";
    },
  },
});

export const { start, success, magic } = wrappedSlice.actions;

export const wrappedData = (state: RootState) => state.test.data;
export const wrappedStatus = (state: RootState) => state.test.status;

export default wrappedSlice.reducer;
