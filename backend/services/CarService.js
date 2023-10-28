const mongoose = require('mongoose')
const CarModel = require('../models/CarModel')
mongoose.connect('mongodb://127.0.0.1:27017/newcar')
const CarService ={
 addCar:async(product)=>{
   
    var pDoc =await CarModel.create( product)
   
    return pDoc;
},

 removeCar:async(pid)=>{
   
    var data =await CarModel.findByIdAndDelete(pid);
    return data;

 
},
getByBrand:async(brandValue)=>{

    console.log(brandValue);
    
   return await CarModel.find({$or: [
    { model: brandValue }, 
    { brand: brandValue }
    
]});
},



}
module.exports=CarService;