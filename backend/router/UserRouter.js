

const express = require("express");

const UserService = require("../services/UserService");

const CarService =require("../services/CarService");

const UserRouter = express.Router();
 


UserRouter.post("/user",async function(req,res){
    var user=req.body
    var newuser=await UserService.signUp(user)
    res.json(newuser)
});

UserRouter.post("/user/login", async (req, res) => {
    var { uname,password } = req.body;
    var user = await UserService.login(uname,password);
    if(user!=null)
        res.send(user.uname+":"+user.password+":"+user.role);
    else
    res.send("invalid");
});

UserRouter.put("/changePassword",async(req,res)=>{
    var {username,password}=req.body
    console.log(data)
    var user=await UserService.changePassword(username,password)
    res.json(user)
})


// UserRouter.put("/forgetPassword",async(req,res)=>{
//     var data=req.body
//     var user=await userservices.forgetPassowrd(data)
//     res.json(user)
// })

module.exports= UserRouter;



/*

const express=require("express");
//const authenticate=require("../authentication/Authentication");
const UserService = require("../services/UserService");
const UserRouter = express.Router();
UserRouter.get('/users',async function (req, res) {
    var users=await UserService.users()
    console.log("Router Working");
    res.json(users)
});
UserRouter.post("/register",async(req,res)=>{
    var data=req.body
    var new_user=await UserService.register(data)
    res.json(new_user)
});
UserRouter.post("/login", async (req, res) => {
    var { uname,password } = req.body;
    var user = await UserService.login(uname,password);
    if(user)
        res.send (user.uname+":"+user.password+":"+user.role);

         res.send("invalid") ;
});
UserRouter.put("/changePassword",async(req,res)=>{
    var data=req.body
    console.log(data)
    var user=await UserService.changepassword(data)
    res.json(user)
})
UserRouter.put("/forgetPassword",async(req,res)=>{
    var data=req.body
    var user=await UserService.forgetPassowrd(data)
    res.json(user)
})
module.exports= UserRouter;

*/