import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Features/userSlice";
export const store = configureStore({
  reducer: {
    userR: userReducer,
  },
});

export default store;
