import { Link } from "react-router-dom"
export default function CheckOut(){
    return(
        <div className="Checkout">
        <h1 className="Checkout-text">Thanks for Shopping with ShoppyGlobe </h1>
        <Link to={`/`}><button className="back-btn">Go Back</button></Link>
        </div>
    )
}