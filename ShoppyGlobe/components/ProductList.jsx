import ProductItems from "./ProductItems"
import { useFetch } from "../Custom Hooks/useFetch"
import { useLocation } from "react-router-dom";

/* Fetches the data by passing the api url to the custom Hook useFetch. 
Gets the current route based on the category from useLocation 
and displays the product based on it's state. 
*/
export default function ProductList(){
   const { data, loading, error } = useFetch('https://fakestoreapi.com/products');
    const location = useLocation(); // Get the current route
    const category = location.state?.category; // Retrieve category from state
   
   //  filtering products based on category
   const filteredProducts = data.filter(product => product.category === category);

    if (loading) return <h2 className="Loading-para">Loading...</h2>;
    if (error) return <h2 className="Error-para loadingError">Error fetching product details</h2>;
    

//   looping through the products and passing each product to ProductItems to render them individually. 
    return(<>
    <div className="Product-List">
       
   {category ? filteredProducts.map((product) => <ProductItems data={product} key={Date.now()*Math.random()} />) : data.map((product) => <ProductItems data={product} key={Date.now()*Math.random()} />)}
    </div>
    </>)
}