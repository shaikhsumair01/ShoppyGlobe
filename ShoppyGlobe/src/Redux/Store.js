import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Redux-slices/CartSlice";

// Setting up the redux store
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store; 
