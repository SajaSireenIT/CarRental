const express=require("express");

const CarService = require("../services/CarService");
const AdminRouter = express.Router();

const authenticate_user = require("../authenticateUser");
const authenticate_admin = require("../authenticate");



AdminRouter.get("/brands/:brand", async(req, res) => {
    var { brand} = req.params;
    console.log(brand); 
    res.json(await CarService.getByBrand(brand));
  });

  

AdminRouter.post("/brands",authenticate_admin,async(req,res)=>{
    var prod =req.body;
    console.log(prod)
    var newprod=await CarService.addCar(prod)
    res.json(newprod);
    res.send("Here I will add prdocts");
  });

// app.post("/user/login", async (req, res) => {
//     var { u,p } = req.body;
//     var user = await UserService.login(u,p);
//     if(user!=null)
//         res.send(user.uname+":"+user.password+":"+user.role);
//     else
//     res.send("invalid");
//     app.post("/product",authenticate_admin,async(req,res)=>{
//         res.send("Here I will add prdocts");
//       });
    
//   });



  AdminRouter.delete('/brands/:pid', authenticate_admin ,async (req,res)=>{
    var {pid}=req.params;
    console.log("Hello Hi Pid "+ pid);
    var brands=await CarService.removeCar(pid);
    res.json(brands);
  })

  

module.exports= AdminRouter;