import mongoose from "mongoose";
// creating the userSchema for user authentication
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

const Users = mongoose.model('users', userSchema);
export default Users;