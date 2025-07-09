import express from "express";
import mongoose from "./db.js";
import productRoutes from "./product.routes.js";
import cartRoutes from "./cart.routes.js";
// creating a server
const app = express();
// Setting the port
const port =  3000;

// Middleware for parsing JSON 
app.use(express.json());


// connecting to the product.route 
productRoutes(app)
cartRoutes(app)
// connecting to the database
mongoose.connect("mongodb://localhost:27017/shoppyglobe")
  .then(() => {
    console.log(" Database is connected");
    app.listen(port, () => console.log(`Server is running on port ${port}`));
  })
  .catch(err => console.error("Database connection error:", err));
