import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.user = action.payload;
      console.log(state.user);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCurrentUser } = userSlice.actions;

export default userSlice.reducer;
