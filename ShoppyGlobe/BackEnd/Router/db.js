import mongoose from "mongoose";
/* creating a centralized mongoose connection so that the 
model and the controller don't face redundant connection issue 
(don't face conflicts in connecting to mongoose)
*/
mongoose.connect("mongodb://localhost:27017/shoppyglobe");

const db = mongoose.connection;

db.once("open", () => console.log("The database is ready"));

export default mongoose;
