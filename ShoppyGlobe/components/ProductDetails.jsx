import { useParams } from "react-router-dom"
import { useFetch } from "../Custom Hooks/useFetch";
import { Link } from "react-router-dom";
export default function ProductDetails(){
    const {id} = useParams();
    const {data, loading, error} = useFetch(`https://fakestoreapi.com/products/${id}`);
   
    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>Error fetching product details</h2>;


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
                <Link to={`/`}><button className="Add-to-cart">Add to Cart</button></Link>
            </div>
            </div>
           
        </div>

    </>)
}