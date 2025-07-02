import ProductItems from "./ProductItems"
import { useFetch } from "../Custom Hooks/useFetch"
export default function NewArrivals(){
      const { data, loading, error } = useFetch('https://fakestoreapi.com/products');
    const newProducts = data
       ?.filter(p => p.rating?.count > 400).slice(0, 6);
    if (loading) return <p>Loading best sellers...</p>;
     if (error) return <p>Error loading best sellers.</p>;
   
       return(
        <div className="NewArrivals-section">
         <h2 className="Section-header">New Arrivals</h2>
         
         <div className="NewArrivals-List">
           {newProducts.map(product => (
             <ProductItems key={product.id} data={product} />
           ))}
         </div>
       </div>)
}