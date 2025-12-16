import { configureStore } from "@reduxjs/toolkit";
import feedReducer from "./feedSlice";
import filterReducer from "./filterSlice";

export const store = configureStore({
  reducer: {
    feed: feedReducer,
    filters: filterReducer
  }
});
