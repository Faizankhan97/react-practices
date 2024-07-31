import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    item: [],
  },
  reducers: {
    addItem: (state, action) => {
      //mutatin the state here
      state.item.push(action.payload);
    },
    removeItem: (state, action) => {
      state.item.pop();
    },
    clearItem: (state, action) => {
      state.item.length = 0;
    },
  },
});

export const {addItem, removeItem, clearItem} = cartSlice.actions;

export default cartSlice.reducer;