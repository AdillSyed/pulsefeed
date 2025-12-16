import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    type: "all",
    sort: "latest"
  },
  reducers: {
    setTypeFilter(state, action) {
      state.type = action.payload;
    },
    setSortOrder(state, action) {
      state.sort = action.payload;
    }
  }
});

export const {
  setTypeFilter,
  setSortOrder
} = filterSlice.actions;

export default filterSlice.reducer;
