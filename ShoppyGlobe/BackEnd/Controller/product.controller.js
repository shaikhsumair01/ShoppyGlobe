import Product from "../Model/product.model.js";
/* using the centralized connection file for mongoose 
since isolated instance of mongoose connection took time to start.*/
import mongoose from "../Router/db.js";


const products = async (req, res) => {
  try {
    // checking for mongoose connection state, whether the database is connected or not
    console.log("Mongoose connection state:", mongoose.connection.readyState);
    // Check for existing products
    let productData = await Product.find({});

    // If no products exist, fetch and insert from external API
    if (productData.length === 0) {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();

      productData = await Product.insertMany(data, { ordered: false });
    }

    res.status(200).json(productData);

  } catch (err) {
    console.error("Error in /products route:", err.message);
    res.status(500).json({
      message: "Couldn't fetch the products",
      error: err.message
    });
  }
};

export default products;