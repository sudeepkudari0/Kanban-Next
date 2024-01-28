import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllTasks = createAsyncThunk("tasks/fetchAllTasks", async () => {
    const users = await axios.get("/api/alltasks")
    return users.data;
  });

const taskSlice = createSlice({
    name: "task",
    initialState: {
        tasks: [],
        isLoading: false,
        isError: false
    },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchAllTasks.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchAllTasks.fulfilled, (state, action) => {
            state.tasks = action.payload
        });
        builder.addCase(fetchAllTasks.rejected, (state, action) => {
            state.isError = true
        })
    },
})

export default taskSlice.reducer;