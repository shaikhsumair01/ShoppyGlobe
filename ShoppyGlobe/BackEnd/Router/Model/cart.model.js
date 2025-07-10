import mongoose from "../db.js";
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
    },
    qty: {
  type: Number,
  required:true,
  default: 1,

}

})

export default mongoose.model("cart", cartSchema)