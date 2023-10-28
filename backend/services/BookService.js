const mongoose=require("mongoose")

const BookModel =require("../models/BookModel")

const UserService=require('./UserService')
const BookService={

   getBookByUname:async(uname)=>{
   var id=await UserService.getIdByUname(uname);
   console.log("id="+id);
    var Book=await BookModel.find({userdetails:id}).populate("userdetails").populate("cardetails");
    console.log("Book",Book);
    return Book;

   }
}
module.exports=BookService;