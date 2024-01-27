// components/features/users/userSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "@/lib/db";

export const fetchAllUsers = createAsyncThunk("users/fetchAllUsers", async () => {
  const users = await db.users.findMany({
    select: {
      id: true,
      name: true,
    },
  });
  return users;
});

const userSlice =  createSlice({
  name: "users",
  initialState: {
    users: [{ id: "", name: "" }],
    isLoading: false,
    isError: false,
    errorMessage: "",
  },
  extraReducers(builder) {
    builder.addCase(fetchAllUsers.pending, (state, action) => {
        state.isLoading = true;
    });
    builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
      state.users.push(...action.payload);
    });
    builder.addCase(fetchAllUsers.rejected, (state, action) => {
        state.errorMessage = action.error.message as string;
        state.isError = true;
    });
  },
  reducers: {},
});

export default userSlice.reducer;
