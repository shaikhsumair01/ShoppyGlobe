import CartItem from "./CartItem"
import { useSelector, useDispatch } from "react-redux"
import { removeAllProducts } from "../src/Redux/Redux-slices/CartSlice"
import { Link } from "react-router-dom"
// Rendering the cart page by getting the cartItems from the CartSlice and displaying each items in the cart and adding a clear button.
export default function Cart(){
    const cart_items = useSelector((state)=>state.cart.cart_items)
    const dispatch = useDispatch()
    return(<div>
    <h1 className="Cart-header">Cart</h1>
     {cart_items.length > 0? <div className="Cart-btn-container"><button className="clear" onClick={()=> dispatch(removeAllProducts())}>Clear Cart</button><Link to={`/CheckOut`}><button className="checkout-btn" onClick={()=> dispatch(removeAllProducts())}>Proceed-to-buy</button> </Link></div>: ""}
     <div className="Cart-container">
        {cart_items.length > 0 ? (
          cart_items.map((item) => <CartItem key={item.id} data={item} />)
        ) : (
          <p className="Cart-message">Your cart is empty.</p>
        )}
      </div>


    </div>)
}