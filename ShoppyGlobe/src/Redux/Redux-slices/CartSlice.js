import { createSlice } from "@reduxjs/toolkit";
/* if the initial cart is empty return an empty array 
and when cart changes display the cart by getting data from the localStorage */

function initialCart(){
  try{
    const data = localStorage.getItem("products"); 
    return data ? JSON.parse(data) : []; 
  }
     catch (e) {
    console.error("Failed to parse cart data:", e);
    return [];
  }

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
      const product = action.payload; // taking the action
      
      const selected_product = state.cart_items.find((item) => item.id === product.id); // finding the item
      if (selected_product){
        selected_product.qty +=1; // If the product exists, increase the quantity
      } 
      else {
        state.cart_items.push({ ...product, qty: 1 }); // if it doesn't then just push it in the cart and set the quantity to 1
      }
      SetData(state.cart_items);
    },
    
    //decreasing the quantity
    decreaseQty: (state, action) => {
      const selected_product = state.cart_items.find((item) => item.id === action.payload);
      if (selected_product) {
        if (selected_product.qty > 1) {
          selected_product.qty -= 1;
        } else {
          state.cart_items = state.cart_items.filter((item) => item.id !== action.payload);
        }
        SetData(state.cart_items);
      }
    },
  //  Removing the selected product 
    decreaseAllQty:(state, action) =>{
      state.cart_items = state.cart_items.filter((item)=> item.id!== action.payload);
    },
    //removing all products
    removeAllProducts: (state) => {
      state.cart_items = []; 
      SetData(state.cart_items);
    },
  },
});

export const { addCart, increaseQty, decreaseQty,decreaseAllQty, removeAllProducts } = cartSlice.actions;
export default cartSlice.reducer;
