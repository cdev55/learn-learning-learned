const { default: mongoose } = require("mongoose");


const userSchema=new mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,   
    address:String,   
});

const User=mongoose.models.User || mongoose.model("User",userSchema);

export default User;