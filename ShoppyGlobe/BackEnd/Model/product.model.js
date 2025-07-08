//creating the product schema for showing products on the website
import mongoose from "../Router/db.js";
// the product schema containing title, price, description, category and rating
const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required:true
  
  },
  description: {
    type: String,
    required:true
 
  },
  category: {
    type: String,
    required: true
  },

  rating: {
    rate: {
      type: Number,
      required:true
     
    },
    count: {
      type: Number,
      required:true
  
    }
  }
});

// creating a model and exporting it to product controller
const Product = mongoose.model('Product', productSchema, 'products');

export default Product