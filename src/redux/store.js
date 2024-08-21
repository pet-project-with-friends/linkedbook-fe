import { configureStore } from "@reduxjs/toolkit";
import postImageReducer from "./reducer/postReducer.js";
import popupReducer from "./reducer/popupReducer.js";

export const store = configureStore({
  reducer: {
    postImage: postImageReducer,
    popup: popupReducer,
  },
});
