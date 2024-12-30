import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: null,
  reducers: {
    addFeed: (state, action) => {
      return action.payload;
    },
    removeUsersFromFeed: (state, action) => {
      const newArr = state.filter((user) => user._id !== action.payload);
      return newArr;
    },
  },
});

export const { addFeed, removeUsersFromFeed } = feedSlice.actions;
export default feedSlice.reducer;
