
import { createSlice } from '@reduxjs/toolkit';

const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    data: [],
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    deleteItem: (state, action) => {
      const itemId = action.payload;
      state.data = state.data.filter(item => item.id !== itemId);
    },
  },
});

export const { setData, deleteItem } = itemsSlice.actions;
export default itemsSlice.reducer;
