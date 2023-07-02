import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./operations";

const initialState = {
  users: {
    items: [],
    isLoading: false,
    error: null,
  },
};

const handlePending = (state) => {
  state.users.isLoading = true;
};

const handleUsers = (state, { payload }) => {
  state.users.items = payload;
  state.users.isLoading = false;
};

const handleRejected = (state) => {
  state.users.isLoading = false;
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, handlePending)
      .addCase(getUsers.fulfilled, handleUsers)
      .addCase(getUsers.rejected, handleRejected);
  },
});

export const usersReducer = usersSlice.reducer;
