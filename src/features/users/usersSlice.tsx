import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import userAPI from "./userAPI";
import type { RootState } from "../../app/store";

export const fetchUsers = createAsyncThunk("users/fetchAll", async () => {
  const response = await userAPI.fetchAll();
  return response.data;
});

export const usersAdapter = createEntityAdapter();

const initialState = usersAdapter.getInitialState({ loading: false });

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    removeUser: usersAdapter.removeOne,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      usersAdapter.upsertMany(state, action.payload);
      state.loading = false;
    });
  },
});

export default userSlice.reducer;

export const { removeUser } = userSlice.actions;

export const {
  selectById: selectUserById,
  selectIds: selectUserIds,
  selectEntities: selectUserEntities,
  selectAll: selectAllUsers,
  selectTotal: selectTotalUsers,
} = usersAdapter.getSelectors((state: RootState) => state.users);
