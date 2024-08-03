import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    item: [],
  },
  reducers: {
    addItem: (state, action) => {
      //we have to mutatin the state here and uses immer BTS
      state.item.push(action.payload);
    },
    removeItem: (state, action) => {
      state.item.pop();
    },
    clearItem: (state, action) => {
      // RTK - either Mutate the existing state or return a new state
      // state.item.length = 0;
      return { item: [] }; // this new [] will be replaced inside originalstate = {item: []}
    },
  },
});

export const {addItem, removeItem, clearItem} = cartSlice.actions;

export default cartSlice.reducer;