import ProductList from "./ProductList";
// Displaying Electronics category
export default function Electronics(){
   return (
   <>
   <h2 className="Section-header">Electronics Collection</h2>
   <ProductList category="electronics" />
   </>
   )
}