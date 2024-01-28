
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs";
import axios from "axios";

export const fetchAllUsers = createAsyncThunk("users/fetchAllUsers", async () => {
  const users = await axios.get("/api/getuser")
  return users.data
});

const userSlice =  createSlice({
  name: "users",
  initialState: {
    fullName: "",
    isLoading: true,
    isError: true,
    errorMessage: "",
  },
  extraReducers(builder) {
    builder.addCase(fetchAllUsers.pending, (state, action) => {
        state.isLoading = true;
    });
    builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.fullName = action.payload || "";
      
    });
    builder.addCase(fetchAllUsers.rejected, (state, action) => {
        state.errorMessage = action.error.message as string;
        state.isError = true;
    });
  },
  reducers: {},
});

export default userSlice.reducer;
