// // postDataSlice.ts

// import {  createAsyncThunk } from "@reduxjs/toolkit";
// import { toast } from "react-toastify";
// // import { postDataAsync } from "../postData/postDataSlice";
// import httpService from "../../../../services/httpService";

// export const deletePostAsync = createAsyncThunk(
//   "posts/deletePost",
//   (id,{dispatch})=>{

//   }
//   // async (id, { dispatch }) => {
//   //   await httpService
//   //     .delete(`product.json/id=${id}`)
//   //     .then((res) => {
//   //       if (res.status === 200) {
//   //         toast.success("Deleted Successfully!", {
//   //           position: "top-right",
//   //           autoClose: 1000,
//   //           closeOnClick: true,
//   //           pauseOnHover: true,
//   //         });
//   //         (
//   //           document.getElementById("my_modal_7 delete")
//   //         ).close();
//   //         // dispatch(postDataAsync());
//   //       } else {
//   //         toast.error("Try Again!", {
//   //           position: "top-right",
//   //           autoClose: 2000,
//   //           closeOnClick: true,
//   //           pauseOnHover: true,
//   //         });
//   //       }
//   //     })
//   //     .catch((err) => {
//   //       console.log(err);
//   //       toast.error("Try Again!", {
//   //         position: "top-right",
//   //         autoClose: 2000,
//   //         closeOnClick: true,
//   //         pauseOnHover: true,
//   //       });
//   //     });
//   // },
// );
// itemsSlice.js

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
