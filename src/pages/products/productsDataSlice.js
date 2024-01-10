import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import httpService from "../../services/httpService";

const initialState = {
  productsData: "",
  loading: "", // Change the type to string or ""
  error: "",
  data: [],
};

export const dataAsync = createAsyncThunk("productsData", async () => {
  try {
    const response = await httpService.get(`/product.json`);
    if (response.status === 200) {
      const productsData = response.data;
      return productsData;
    }
  } catch (error) {
    toast.error("There Is A Problem!", {
      position: "top-right",
      autoClose: 2000,
      closeOnClick: true,
      pauseOnHover: true,
    });
  }
});

const productsData = createSlice({
  name: "productsData",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.productsData = action.payload;
    },
    
    deleteProduct: (state, action) => {
      const productIdToDelete = action.payload;
      state.productsData = state.productsData.filter(productsData => productsData.id !== productIdToDelete);
    },
    updateProduct: (state, action) => {
      const updatedProduct = action.payload;
      state.productsData = state.productsData.map((product) =>
        product.id === updatedProduct.id ? { ...product, ...updatedProduct } : product
      );
    },
 
  },
  extraReducers: (builder) => {
    builder
      .addCase(dataAsync.pending, (state) => {
        state.loading = "pending";
        state.error = "";
      })
      .addCase(dataAsync.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.productsData = action.payload;
      })
      .addCase(dataAsync.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message || "Login failed";
      });
  },
});
export const { setData, deleteProduct,updateProduct } = productsData.actions;

export default productsData.reducer;
