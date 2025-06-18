import { useParams } from "react-router-dom";
import { useFetch } from "../Custom Hooks/useFetch";
import ProductItems from "./ProductItems";
// Filtering the items based on user input in the textbox from header and 
// displaying their search result
export default function SearchResults() {
    const { query } = useParams();
    const { data, loading, error } = useFetch("https://fakestoreapi.com/products");
    
    // If the user input is present in the product title
    const filteredResults = data.filter(product => 
        product.title.toLowerCase().includes(query.toLowerCase())
    );

    if (loading) return <h2 className="Loading-para">Loading...</h2>;
    if (error) return <h2 className="Error-para loadingError">Error fetching search results.</h2>;

    // Showing the result
    return (
        <div className="Search-results">
            <h1 className="Search-header">Results for: "{query}"</h1>
            <div className="Product-List">
            {filteredResults.length > 0 ? (
                filteredResults.map(product => <ProductItems key={product.id} data={product} />)
            ) : (
                <h2>No products match your search.</h2>
            )}
            </div>
        </div>
    );
}