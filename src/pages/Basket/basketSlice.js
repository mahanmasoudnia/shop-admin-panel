import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
  name: "basket",
  initialState: {
    items: [],
  },
  reducers: {
    setData: (state, action) => {
      state.basket = action.payload;
    },

    deleteItem: (state, action) => {
      console.log(action);
      const productIdToDelete = action.payload;
      const indexToDelete = state.items.findIndex((item) => item.id === productIdToDelete);

      if (indexToDelete !== -1) {

        state.items = state.items.slice(0, indexToDelete).concat(state.items.slice(indexToDelete + 1));
      }
    },
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { addItem, deleteItem } = basketSlice.actions;
export default basketSlice.reducer;
