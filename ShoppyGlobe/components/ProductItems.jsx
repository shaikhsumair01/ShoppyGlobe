import { Link } from "react-router-dom"
import { useDispatch } from "react-redux";
import { addCart } from "../src/Redux/Redux-slices/CartSlice";

// Rendering each product individually and dispatching an action (addCart) to add elements in the cart
export default function ProductItems(prop){
    
    const dispatch = useDispatch() // used for dispatching addCart function
    const product_price = Math.round(prop.data.price*116.85);
    // Rendering product card
    return(<>
    <div className="Product-card">
    <img src={prop.data.image} className="Product-image"/>
    <h2 className="Product-name">{prop.data.title}</h2>
    <h2 className="Product-price">&#8377;{product_price}</h2>
    <div className="btn-container">
        <Link to={`/ProductDetails/${prop.data.id}`}><button className="Show-description">See Details</button></Link>
        <button className="Add-to-cart" onClick={() => {
            alert("Item added to the cart")
            // dispatching the action
            dispatch(addCart({ ...prop.data, id: prop.data.id }))}}>Add to Cart</button>
    </div>
    
    </div>
    </>)
}