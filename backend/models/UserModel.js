const mongoose = require("mongoose");
//mongoose.connect('mongodb://127.0.0.1:27017/newcar');
const UserModel = mongoose.model("User",new mongoose.Schema
({
    
    name:{type: String, required: true},
    email: {type: String, required: true},
    uname:{type: String, required: true, unique: true},
    password:{type: String, required: true},
    role:{type: String, default: 'user'}
}));

module.exports=UserModel;