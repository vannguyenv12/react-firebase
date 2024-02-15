import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const setCurrentUser = createAsyncThunk(
  "users/setCurrentUser",
  async (userId, thunkAPI) => {}
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(setCurrentUser.fulfilled, (state, action) => {});
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = userSlice.actions;

export default userSlice.reducer;
