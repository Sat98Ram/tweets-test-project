import { createSlice } from "@reduxjs/toolkit";
import { followUser, getUsers } from "./operations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  isFollow: [],
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleUsers = (state, { payload }) => {
  state.isLoading = false;
  state.items = payload.map((el) => ({
    ...el,
    isFolowing: state.isFollow.some((e) => e === el.id),
  }));
};

const handleRejected = (state) => {
  state.isLoading = false;
};

const handleUpdateFollowers = (state, { payload }) => {
  state.items = state.items.map((el) =>
    el.id === payload.id ? { ...el, ...payload } : el
  );
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    followUserById(state, { payload }) {
      return {
        ...state,
        isFollow: [...state.isFollow, payload],
        items: state.items.map((el) =>
          el.id === payload ? { ...el, isFolowing: true } : el
        ),
      };
    },
    unfollowUserById(state, { payload }) {
      return {
        ...state,
        isFollow: state.isFollow.filter((item) => item !== payload),
        items: state.items.map((el) =>
          el.id === payload ? { ...el, isFolowing: false } : el
        ),
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, handlePending)
      .addCase(getUsers.fulfilled, handleUsers)
      .addCase(getUsers.rejected, handleRejected)
      .addCase(followUser.fulfilled, handleUpdateFollowers);
  },
});

export const usersReducer = usersSlice.reducer;
export const { followUserById, unfollowUserById } = usersSlice.actions;
