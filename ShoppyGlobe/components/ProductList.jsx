import ProductItems from "./ProductItems"
import { useFetch } from "../Custom Hooks/useFetch"
export default function ProductList(){
   const { data, loading, error } = useFetch('https://fakestoreapi.com/products');
   console.log(data)
    return(<>
    <div className="Product-List">
       {data.map((product)=><ProductItems data={product}/>)}
    </div>
    </>)
}