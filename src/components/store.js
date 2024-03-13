import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "./apiThunkSlice";
const store = configureStore({
  reducer: {
    userData: apiReducer,
  },
});
export default store;
