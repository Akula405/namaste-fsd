import { createSlice } from "@reduxjs/toolkit";
const selectionSlice = createSlice({
  name: "selectionState",
  initialState: { isOpen: false },
  reducers: {
    changeState: (state) => {
      state.isOpen = true;
    },
  },
});

export const { changeState } = selectionSlice.reducer;
export default selectionSlice.reducer;
