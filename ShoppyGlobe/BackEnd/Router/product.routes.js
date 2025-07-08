import products from "../Controller/product.controller.js";
// creating all the routes for products
export default function productRoutes(app){
app.get("/products", products);
}