
const UserModel = require('../models/UserModel')
const mongoose = require('mongoose')
//mongoose.connect('mongodb://127.0.0.1:27017/newcar')
const UserService={

    signUp:async(user)=>{

        var pdoc=await UserModel.create(user);
        // mongoose.connection.close()
        return pdoc
    },
    login: async (u, p) => {
        
        var user = await UserModel.findOne({ uname: u ,password:p});
        console.log(u,p);
        console.log(user);
      
        console.log(user);
        return user;
      },
      changePassword:async(unm,passwd)=>{
      
        var user=await UserModel.findOneAndUpdate({uname:unm},{password:passwd},{new:true,useFindAndModify:false})
     
        return user
    },
    removeUser:async(uid)=>{
   
        var data =await UserModel.findByIdAndDelete(uid)
       
        return data;
},

getIdByUname:async(uname)=>{
    console.log("uname inside uservice"+uname)
    var data =await UserModel.findOne({uname:uname})
    console.log("data",data);
    return data._id;
}

}
module.exports=UserService;



/*

const mongoose=require('mongoose')
const UserModel=require('../models/UserModel')
//const SendMail=require('../mailSender/SendMail')

const UserService={
    users:async()=>{
        await mongoose.connect("mongodb://127.0.0.1:27017/newcar")
        var usersData=await UserModel.find()
        mongoose.connection.close()
        return usersData
    },
    register:async(userData)=>{
        await mongoose.connect("mongodb://127.0.0.1:27017/newcar")
        var user=await UserModel.findOne({uname:userData.uname})
        if(user==null){
            var pDoc=await UserModel.create(userData)
            mongoose.connection.close()
            return pDoc
        }
        else{
            return "Already have account? Login here"
        }
    },
    login: async (u, p) => {
        await mongoose.connect("mongodb://127.0.0.1:27017/newcar");
        var user = await UserModel.findOne({ uname: u ,password:p});
        console.log(u,p);
        console.log("user=",user);
        mongoose.connection.close();
        console.log(user);
        return user;
      },
    changepassword:async(userData)=>{
        await mongoose.connect("mongodb://127.0.0.1:27017/newcar")
        console.log(userData)
        var user=await UserModel.findOneAndUpdate({uname:userData.uname},{password:userData.newPassword})
        console.log(user)
        if(user!=null)
        {
            return user
        }
        else
        {
            return null
        }
    },
    // forgetPassowrd:async(userData)=>{
    //     await mongoose.connect("mongodb://127.0.0.1:27017/newcar")
    //     var otp=userData.otp
    //     if(SendMail.MailSender(userData.email)==otp){
    //         var forget=await UserModel.findOneAndUpdate(
    //             {uname:userData.uname},
    //             {password:userData.newPassword}
    //         )
    //         console.log(forget)
    //         if(forget!=null)
    //         {
    //             mongoose.connection.close()
    //             return UserModel.find({email:userData.email})
    //         }
    //         else{
    //             mongoose.connection.close()
    //             return "User name not found"
    //         }
    //     }
    //     else{
    //         mongoose.connection.close()
    //         return null
    //     }        
    // }
}

module.exports=UserService

*/