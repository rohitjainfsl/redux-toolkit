import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getInitialData = createAsyncThunk(
  "ecommerce/getInitialData",
  async () => {
    const response = await axios.get("https://fakestoreapi.com/products")
    return response.data
  }
);
export const getSingleData = createAsyncThunk(
  "ecommerce/getSingleData",
  async (id) => {
    const response = await axios.get("https://fakestoreapi.com/products/"+id)
    return response.data
  }
);


export const ecommerceSlice = createSlice({
  name: "ecommerce",
  initialState: {
    data: [],
    cart: [],
    singleData: {}
  },
  reducers: {
    addToCart: function(state, action){
      state.cart = [...state.cart, action.payload]
    },
    deleteFromCart: function(state, action){
      // console.log(action.payload)
      state.cart = state.cart.filter(cartItem => cartItem.id !== action.payload.id)
    }
  },
  extraReducers: {
    [getInitialData.pending]: () => {},

    [getInitialData.fulfilled]: (state, action) => {
      // console.log(action)
      state.data = action.payload
    },

    [getInitialData.rejected]: () => {},


    [getSingleData.pending]: () => {},
    [getSingleData.fulfilled]: (state, action) => {
      state.singleData = action.payload
    },
    [getSingleData.rejected]: () => {}
  },

});

export const {addToCart, deleteFromCart} = ecommerceSlice.actions;

export default ecommerceSlice.reducer;
