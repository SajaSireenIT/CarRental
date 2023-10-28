const mongoose = require("mongoose");
//mongoose.connect('mongodb://127.0.0.1:27017/newcar');
const CarModel = mongoose.model("brands",new mongoose.Schema({
    
    //models:{type:Object},
    model:{type: String,required:true,uniqe:true},
    type:{type: String,required:true},
    brand:{type: String,required:true},
    fuel: {type: String,required:true},
    seat:{type: String,required:true},
    price:{type: String,required:true}
}));


module.exports = CarModel;