import { useDispatch } from "react-redux";
import { increaseQty,decreaseQty,decreaseAllQty } from "../src/Redux/Redux-slices/CartSlice";

// Rendering each elements in the cart and giving them the functionality of removing or increasing their quantity
export default function CartItem({ data }) {
   const product_price = Math.round(data.price*116.85);
   const dispatch = useDispatch() // dispatching function to increase quantity, decrease quantity and remove an entire item from the list.
  return (
    <div className="Cart-item">
      <img src={data.image} className="Cart-item-image" />
      <div className="Cart-desc">
      <h2 className="Cart-title">{data.title}</h2>
      <h3 className="Cart-qt">Quantity: 
        <span className="Qt-val">
          <i className="fa-solid fa-plus cart-icon divider" onClick={()=>dispatch(increaseQty(data.id))}>
            </i> {data.qty} 
            <i className="fa-solid fa-minus cart-icon divider"  onClick={()=>dispatch(decreaseQty(data.id))}></i>
            </span> 
            </h3>
      <h3 className="Cart-price">Price: ₹{product_price * data.qty}</h3>
      </div>
    <i className="fa-solid fa-trash cart-icon"  onClick={()=>dispatch(decreaseAllQty(data.id))}></i>
    </div>
  );
}
