import express from "express";
import mongoose from "./db.js";
import productRoutes from "./product.routes.js";
import cartRoutes from "./cart.routes.js";
import userRoutes from "./user.routes.js";
import dotenv from 'dotenv';
dotenv.config();

// creating a server
const app = express();
// Setting the port
const port =  3000;

// Middleware for parsing JSON 
app.use(express.json());


// connecting to the product.route 
productRoutes(app)
cartRoutes(app)
userRoutes(app)
// connecting to the database
mongoose.connect("mongodb://localhost:27017/shoppyglobe")
  .then(() => {
    console.log(" Database is connected");
    app.listen(port, () => console.log(`Server is running on port ${port}`));
  })
  .catch(err => console.error("Database connection error:", err));
