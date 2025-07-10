import cartModel from "../Model/cart.model.js";

// getting all the items present in the cart at get request on route /cart
export const getCart = async(req,res)=>{
try{
    const cartItems = await cartModel.find({});
    // if there is nothing in the cart then it will print cart is empty
    if(!cartItems || cartItems.length === 0){
        return res.status(404).json({message: "Cart is empty"})
    }
    else{
        // returning the cartItems from the cart
        return res.status(200).json(cartItems)
    }
}
catch(err){
    // If cart not found
    return res.status(500).json({message: "Couldn't find the cart", error: err})
}
}

// adding new items to cart using the post request on route /cart
export const addCart = async(req,res)=>{
try{
    const cartItems = req.body;
    if (cartItems){
        const cartItem = new cartModel(cartItems);
        await cartItem.save();
        res.status(201).json({ message: "cartItem added successfully!" })
    }
    else {
            res.status(404).json({ message: "Cart item is empty!" })
        }
}
catch(err){
    return res.status(500).json({message: "Couldn't find the cart", error: err})
}
}
/* finding and updating the item quantity based on the id 
 and the sign provided by the user in the req.body. 
If the sign is "+" then the quantity increases and if it is "-" then it will decrease */
// the cart items will be updated on route "/cart"

export const updateCart = async (req, res) => {
  try {
    // getting the id and symbol from the user
    const { id, sign } = req.body;
// If the user didn't send id and sign send the error message 
    if (!id || !sign || !['+', '-'].includes(sign)) {
      return res.status(400).json({ message: "Invalid input. Provide valid 'id' and 'sign' (+ or -)." });
    }

    // finding the item using the id from cart items
    const cartItem = await cartModel.findById(id);
    // if item is not present then send error
    if (!cartItem) {
      return res.status(404).json({ message: "Item not found!" });
    }
    if (sign === '-' && cartItem.qty <= 1) {
      return res.status(400).json({ message: "Quantity cannot be less than 1." });
    }

    // if item is found then update the quantity
    const updatedItem = await cartModel.findByIdAndUpdate(
      id,
      { $inc: { qty: sign === '+' ? 1 : -1 } },
      { new: true }
    );

    return res.status(200).json({
      message: "The cart quantity has been updated",
      updatedQty: updatedItem.qty,
      updatedItem
    });
  } catch (err) {
    console.error("Update Cart Error:", err);
    return res.status(500).json({ message: "Couldn't understand the request", error: err.message || err });

  }
};
// deleting the cart items by taking their id. Items deleted on route "/cart"
export const deleteCart = async(req,res)=>{
try{ 
    // getting id and sign from the user
    const { id, sign } = req.body
     // Validating user input
    if (!id || !sign || !['+', '-'].includes(sign)) {
      return res.status(400).json({ message: "Invalid input. Provide valid 'id' and 'sign' (+ or -)." });
    }
        const cartItem = await cartModel.findById(id);

        if (!cartItem) {
            return res.status(404).json({ message: "Item not found!" })
        }
    // if quantity is less than 1 then we delete the item from the cart
        if (sign === '-' && cartItem.qty === 1) {
            const deletedItem = await cartModel.findByIdAndDelete(id);
            return res.status(201).json({ message: "Item deleted successfully!", deletedItem: deletedItem })
        }
}catch(err){
     return res.status(500).json({message: "Couldn't understand the request", error: err.message})
}
}