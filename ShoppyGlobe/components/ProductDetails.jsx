import { useParams } from "react-router-dom"
import { useFetch } from "../Custom Hooks/useFetch";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../src/Redux/Redux-slices/CartSlice";
import { toast, ToastContainer } from 'react-toastify';

/* Fetching the selected product based on their id using useParams and 
 showing the selected product's details */ 
export default function ProductDetails(){
    const {id} = useParams(); // fetching the id
    const {data, loading, error} = useFetch(`https://fakestoreapi.com/products/${id}`); // fetching the api data and converting it to object
    const dispatch = useDispatch() // dispatching an action to add the item to cart
    if (loading) return <h2 className="Loading-para">Loading...</h2>; // loading if the data is not fetched
    if (error) return <h2 className="Error-para loadingError">Error fetching product details</h2>; // showing error text

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
               <button className="Add-to-cart" onClick={() => {
                         toast.success("Item added to the cart");
                          // dispatching the action
                          dispatch(addCart({ ...data, id: data.id }))}}>Add to Cart</button>
            </div>
            </div>
             <ToastContainer
  position="bottom-center"
  autoClose={2000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  pauseOnFocusLoss
  draggable
  pauseOnHover
/>
           
        </div>

    </>)
}