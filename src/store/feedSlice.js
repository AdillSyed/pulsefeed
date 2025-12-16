import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: {
    items: [],
    selectedId: null,
    status: "idle",
    error: null
  },
  reducers: {
    setFeed(state, action) {
      state.items = action.payload;
    },
    selectItem(state, action) {
      state.selectedId = action.payload;
    },
    clearSelection(state) {
      state.selectedId = null;
    }
  }
});

export const {
  setFeed,
  selectItem,
  clearSelection
} = feedSlice.actions;

export default feedSlice.reducer;
