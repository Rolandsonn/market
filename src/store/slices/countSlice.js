import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    addCash(state, action) {
      state.count += action.payload;
    },
    getCash(state, action) {
      if (state.count > 0) {
        state.count -= action.payload;
      }
    },
  },
});

export const { addCash, getCash } = countSlice.actions;
export default countSlice.reducer;
