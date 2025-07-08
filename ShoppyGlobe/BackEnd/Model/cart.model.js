import mongoose from "mongoose";
// creating the cart schema for crud operations in cart
const cartSchema = new mongoose.Schema({
    id: Number,
    title: String,
    description:String,
    price:Number,
    category:String,
    rating:{
        rate: Number,
        count: Number
    }
})

export default mongoose.model("cart", cartSchema)