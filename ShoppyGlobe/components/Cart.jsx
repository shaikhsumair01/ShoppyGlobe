import CartItem from "./CartItem"
import { useSelector } from "react-redux"
export default function Cart(){
    const cart_items = useSelector((state)=>state.cart.cart_items)
    return(<>
    <h1 className="Cart-header">Cart</h1>
     <div className="Cart-container">
        {cart_items.length > 0 ? (
          cart_items.map((item) => <CartItem key={Date.now()*Math.random()} data={item} />)
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>


    </>)
}