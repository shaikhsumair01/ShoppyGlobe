import {registerUser,loginUser} from "./Controller/user.controller.js"
// creating routes for user registeration
export default function userRoutes(app){
app.post("/register", registerUser)
app.post("/login", loginUser)
}