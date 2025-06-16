import { Link } from "react-router-dom"

export default function ProductItems(prop){
    const product_price = Math.round(prop.data.price*116.85);
    return(<>
    <div className="Product-card">
    <img src={prop.data.image} className="Product-image"/>
    <h2 className="Product-name">{prop.data.title}</h2>
    <h2 className="Product-price">&#8377;{product_price}</h2>
    <div className="btn-container">
        <Link to={`/ProductDetails/${prop.data.id}`}><button className="Show-description">See Details</button></Link>
        <Link to={`/ProductDetails/${prop.data.id}`}><button className="Add-to-cart">Add to Cart</button></Link>
    </div>
    
    </div>
    </>)
}