import mongoose from "mongoose";
// creating the userSchema for user authentication
// the userSchema contains name, email and password
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
})

// creating a model and exporting it
const Users = mongoose.model('users', userSchema);
export default Users;