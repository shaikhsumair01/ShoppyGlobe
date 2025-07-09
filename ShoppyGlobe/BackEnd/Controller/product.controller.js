import Product from "../Model/product.model.js";


// ProductsController for route /products (fetching all the products).
export const productsController = async (req, res) => {
  try {
    
    // Check for existing products
    let productData = await Product.find({});

    // If no products exist, fetch and insert from external API
    if (productData.length === 0) {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();

      productData = await Product.insertMany(data, { ordered: false }); 
      // order is set to false incase if any data didn't match the schema order, the insert operation doesn't stop.
    }

    res.status(200).json(productData);

  } catch (err) {
    res.status(500).json({
      message: "Couldn't fetch the products",
      error: err.message
    });
  }
};
// product controller for route "/product/:id" for fetching product by id.
export const productController = async(req,res)=>{
  try{
    // find the product by id from the request send
   const productId  = req.params.id;
   const product = await Product.findById(productId);
  //  if product exist then display the product else send error.
   if(product){
    res.status(200).json(product)
   }
   else{
    res.status(400).json({message: `Couldn't find the product by the id ${productId}`})
   }

  }
  catch(err){
    res.status(500).json({message:"Couldn't understand your request", error: err.message})
    
  }
}

