import { useParams } from "react-router-dom"
export default function ProductDetails(){
    const {id} = useParams();
    return(<>
    <h1>Product Details for ID: {id}</h1>
    </>)
}