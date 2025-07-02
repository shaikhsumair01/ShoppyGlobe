import ProductItems from "./ProductItems"
import { useFetch } from "../Custom Hooks/useFetch"
export default function BestSellers(){
     const { data, loading, error } = useFetch('https://fakestoreapi.com/products');
    const topProducts = data
    ?.filter(p => p.rating?.rate > 4.5).slice(0, 6);
 if (loading) return <p>Loading best sellers...</p>;
  if (error) return <p>Error loading best sellers.</p>;

    return(
     <div className="BestSellers-section">
      <h2 className="Section-header">Best Sellers</h2>
      
      <div className="BestSeller-List">
        {topProducts.map(product => (
          <ProductItems key={product.id} data={product} />
        ))}
      </div>
    </div>

    )
}