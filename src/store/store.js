import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./slices/countSlice";
import goodsSlice from "./slices/goodsSlice";

export const store = configureStore({
  reducer: {
    countSlice,
    goodsSlice,
  },
});
