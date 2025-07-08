import mongoose from "mongoose";
// creating a centralized mongoose connection (incase the isolated instances didn't work)

mongoose.connect("mongodb://localhost:27017/shoppyglobe");

const db = mongoose.connection;

db.once("open", () => console.log("The database is ready"));

export default mongoose;
