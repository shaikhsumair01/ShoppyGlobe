import { getCart, addCart, updateCart, deleteCart } from "./Controller/cart.controller.js"
import { verifyToken } from "./Controller/user.controller.js"
// getting all the routes form cart controllers
export default function cartRoutes(app){
app.get("/cart", verifyToken, getCart)
app.post("/cart", verifyToken, addCart)
app.put("/cart", verifyToken, updateCart)
app.delete("/cart",verifyToken, deleteCart)
}