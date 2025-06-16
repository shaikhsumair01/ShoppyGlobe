import ProductItems from "./ProductItems"
import { useFetch } from "../Custom Hooks/useFetch"
import { useLocation } from "react-router-dom";

export default function ProductList(){
   const { data, loading, error } = useFetch('https://fakestoreapi.com/products');
    const location = useLocation(); // Get the current route
    const category = location.state?.category; // Retrieve category from state
   
   const filteredProducts = data.filter(product => product.category === category);

    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>Error fetching product details</h2>;

  
    return(<>
    <div className="Product-List">
       
       {category ? filteredProducts.map((product) => <ProductItems data={product} />) : data.map((product) => <ProductItems data={product} />)}
    </div>
    </>)
}