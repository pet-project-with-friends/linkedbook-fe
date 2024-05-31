import { configureStore } from "@reduxjs/toolkit";
import postImageReducer from "./reducer/postReducer.js";

export const store = configureStore({
  reducer: {
    postImage: postImageReducer,
  },
});
