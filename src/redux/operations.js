import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://648c688e8620b8bae7ecdb66.mockapi.io";

export const getUsers = createAsyncThunk(
  "users/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/users");
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const followUser = createAsyncThunk(
  "users/follow",
  async ({ userId, followers }, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(`/users/${userId}/`, {
        followers,
      });
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
