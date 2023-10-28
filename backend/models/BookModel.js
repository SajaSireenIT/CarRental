const mongoose = require("mongoose");
//mongoose.connect('mongodb://127.0.0.1:27017/newcar');
const BookSchema = new mongoose.Schema({
    bookid:{type:String},
    bookdate:{type:Date},
    returndate:{type:Date},
    cardetails:
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"brands"
        },
        
    
userdetails:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }

});
const BookModel=mongoose.model("book",BookSchema);

module.exports = BookModel;


// userid:{type:String,required:true,unique:true},
// model:{type: String,required:true,unique:true},
// type:{type: String, required:true},
// brand:{type: String,required:true},
// fuelType: {type: String,required:true},
// seat:{type: String,required:true},
// price:{type: String,required:true},
// date:{type:Date,required:true},
// amount:{type:String,required:true}