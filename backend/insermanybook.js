const mongoose  = require("mongoose");
const BookModel= require("./models/BookModel");



const demo =async()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/newcar');
   
    await BookModel.insertMany([
{userdetails:"64ac051882346336856cb216",cardetails:"64ac224ad97b3e27abb7b2cd"},
{userdetails:"64ad01118c0d0a9414ee72b7",cardetails:"64ac224ad97b3e27abb7b2ce"},


]);
    mongoose.connection.close();
    
};
    demo();