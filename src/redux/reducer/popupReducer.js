import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: null,
};

const popupSlice = createSlice({
  name: "popupSlice",
  initialState: initialState,
  reducers: {
    popup(state, action) {
      state.isOpen = action.payload;
    },
  },
});

export const popupAction = popupSlice.actions;
export default popupSlice.reducer;
