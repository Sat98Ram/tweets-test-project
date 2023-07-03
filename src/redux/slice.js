import { createSlice } from "@reduxjs/toolkit";
import { followUser, getUsers } from "./operations";

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

const handleUpdateFollowers = (state, { payload }) => {
  const { userId, followers } = payload;
  const user = state.users.items.find((item) => item.id === userId);
  if (user) {
    user.followers = followers;
  }
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, handlePending)
      .addCase(getUsers.fulfilled, handleUsers)
      .addCase(getUsers.rejected, handleRejected)
      .addCase(followUser.fulfilled, handleUpdateFollowers);
  },
});

export const usersReducer = usersSlice.reducer;
