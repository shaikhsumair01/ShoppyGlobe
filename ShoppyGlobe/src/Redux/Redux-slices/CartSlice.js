import { createSlice } from "@reduxjs/toolkit";
/* if the initial cart is empty return an empty array 
and when cart changes display the cart by getting data from the localStorage */

function initialCart(){
    const data = localStorage.getItem("products"); 
    return data ? JSON.parse(data) : []; 
}
// Setting data to localStorage
function SetData(data){
    localStorage.setItem("products", JSON.stringify(data))
}
// Setting the initial state to the data fetched from the localStorage
const initialState ={ 
    cart_items: initialCart(),
}
// Creating slice
const cartSlice = createSlice({ 
  name: "cart",
  initialState,
  reducers: {
    // addCart function
    addCart: (state, action) => {
      const product = action.payload;
       console.log("Adding to cart:", product);
      const selected_product = state.cart_items.find((item) => item._id === product._id);
      if (!selected_product) {
        state.cart_items.push({ ...product, qty: 1 });
        SetData(state.cart_items);
      }
    },
    //increasing the quantity
    increaseQty: (state, action) => {
      const selected_product = state.cart_items.find((item) => item._id === action.payload);
      if (selected_product) {
        selected_product.qty += 1;
        SetData(state.cart_items);
      }
    },
    //decreasing the quantity
    decreaseQty: (state, action) => {
      const selected_product = state.cart_items.find((item) => item._id === action.payload);
      if (selected_product) {
        if (selected_product.qty > 1) {
          selected_product.qty -= 1;
        } else {
          state.cart_items = state.cart_items.filter((item) => item._id !== action.payload);
        }
        SetData(state.cart_items);
      }
    },
    //removing all products
    removeAllProducts: (state) => {
      state.cart_items = []; 
      SetData(state.cart_items);
    },
  },
});

export const { addCart, increaseQty, decreaseQty, removeAllProducts } = cartSlice.actions;
export default cartSlice.reducer;
