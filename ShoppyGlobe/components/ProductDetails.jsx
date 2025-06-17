import { useParams } from "react-router-dom"
import { useFetch } from "../Custom Hooks/useFetch";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

/* Fetching the selected product based on their id using useParams and 
 showing the selected product's details */ 
export default function ProductDetails(){
    const {id} = useParams();
    const {data, loading, error} = useFetch(`https://fakestoreapi.com/products/${id}`);
    const dispatch = useDispatch()
    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>Error fetching product details</h2>;

// Rendering the Product detail page
    return(<>
      <div className="Product-details">
            <img src={data.image} className="Desc-image" alt={data.title} />
            <div className="Product-desc">
                 <h1 className="Product-name">{data.title}</h1>
            <h2 className="Product-price"><span className="span-text">Price: </span>&#8377;{Math.round(data.price * 116.85)}</h2>
            <p className="description"><span className="span-text">Description: </span>{data.description}</p>
            <h3 className="category-text"><span className="span-text">Category: </span>{data.category}</h3>
            <div className="btn-container">
                <Link to={`/`}><button className="back-btn">Go Back</button></Link>
                <button className="Add-to-cart"  onClick={() => dispatch(addCart(data))}>Add to Cart</button>
            </div>
            </div>
           
        </div>

    </>)
}