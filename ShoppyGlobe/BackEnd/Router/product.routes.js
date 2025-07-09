import{productsController, productController} from "../Controller/product.controller.js";
// creating all the routes for products
export default function productRoutes(app){
app.get("/products", productsController);
app.get("/products/:id", productController);
}