//creating the product schema for showing products on the website
import mongoose from 'mongoose';

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

export default mongoose.model('Product', productSchema);