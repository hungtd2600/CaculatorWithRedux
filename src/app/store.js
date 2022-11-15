import caculReducer from "../features/CaculatorSlice";
import { configureStore } from "@reduxjs/toolkit";

// Store
const store = configureStore({
  reducer: {
    caculReducer,
  },
});

export default store;
