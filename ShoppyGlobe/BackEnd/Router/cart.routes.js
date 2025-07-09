import { getCart, addCart, updateCart, deleteCart } from "../Controller/cart.controller.js"
// getting all the routes form cart controllers
export default function cartRoutes(app){
app.get("/cart", getCart)
app.post("/cart", addCart)
app.put("/cart", updateCart)
app.delete("/cart",deleteCart)
}