import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./cardSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});
