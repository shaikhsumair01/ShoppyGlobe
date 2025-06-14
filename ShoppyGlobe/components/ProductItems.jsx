import { Link } from "react-router-dom"
import ProductDetails from "./ProductDetails"
export default function ProductItems(prop){
    return(<>
    <div className="Product-card">
    <img src={prop.data.image} className="Product-image"/>
    <h2 className="Product-name">{prop.data.title}</h2>
    <h2 className="Product-price">{prop.data.price}</h2>
    {/* <Link to={`/ProductDetails/${product.id}`}><button className="Product-description">See Details</button></Link> */}
    </div>
    </>)
}