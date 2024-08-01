import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:3002/users";

export const fetchUser = createAsyncThunk("users/fetchUser", async () => {
  const res = await axios.get(BASE_URL);
  return res.data;
});

export const createUser = createAsyncThunk(
  "users,createUser",
  async (formdata) => {
    try {
      const res = await axios.post(BASE_URL, formdata);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const newupdateUser = createAsyncThunk(
  "user/newupdateUser",
  async ({ id, updateuser }) => {
    console.log("id", id);
    console.log("id", updateuser);
    try {
      const response = await axios.put(
        `http://localhost:3002/users/${id}`,
        updateuser
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteUser = createAsyncThunk("users,deleteUser", async (id) => {
  const res = await axios.delete(`http://localhost:3002/users/${id}`);
  return res.json();
});

export const userSlice = createSlice({
  name: "users",
  initialState: {
    isLoading: false,
    user: [],
    error: null,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.isLoading = false;

      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.isLoading = false;
      state.user = [];
      state.error = action.error;
    });
  },
});

export default userSlice.reducer;
