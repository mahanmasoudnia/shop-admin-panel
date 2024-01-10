import { configureStore } from "@reduxjs/toolkit";
import productsDataSlice, { dataAsync } from "./pages/products/productsDataSlice";
import basketSlice from "./pages/Basket/basketSlice";

const store = configureStore({
  reducer: {
    productsData: productsDataSlice,
    basket: basketSlice,
  },
});
store.dispatch(dataAsync());

export default store;
