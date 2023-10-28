const mongoose=require("mongoose");
const CarModel=require("./models/CarModel");
const demo =async()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/newcar')
   await CarModel.insertMany([
       {model:"Maruthi_ALTo_2022",brand:"Maruthi",type:"Manual",cost:"218",fuel:"Petrol",seat:"5seats"},
       {model:"Maruthi_swift_Drize_2019",brand:"Maruthi",type:"Automatic",cost:"336",fuel:"Petrol",seat:"5seats"},
     {model:"Maruthi_celerio_2023",brand:"Maruthi",type:"Manual",cost:"327",fuel:"Petrol",seat:"5seats"},
     {model:"Maruthi_wagon_R_2019",brand:"Maruthi",type:"Manual",cost:"327",fuel:"Petrol",seat:"5seats"},
     {model:"Hyunadi_I20_2015",brand:"hyundai",type:"Manual",cost:"235",fuel:"Petrol",seat:"5seats"},
     {model:"Honda_Jazz_2017",brand:"Honda",type:"Automatic",cost:"443",fuel:"Petrol",seat:"5seats"},
     {model:"Hyunadi_Amaze_2023",brand:"Honda",type:"Manual",cost:"300",fuel:"Petrol",seat:"5seats"},
       
       
       
       

    ]);
    mongoose.connection.close();
}

demo().then(()=>{console.log("inserterd dataa")}).catch((err)=>{console.log(err)})