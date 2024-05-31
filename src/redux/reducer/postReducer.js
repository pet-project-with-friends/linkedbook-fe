import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  images: [],
};

const postSlice = createSlice({
  name: "postImage",
  initialState,
  reducers: {
    storeImage(state, action) {
      state.images.push(action.payload);
    },
    clearImage(state, action) {
      state.images = null;
    },
  },
});

export const postImageAction = postSlice.actions;
export default postSlice.reducer;
