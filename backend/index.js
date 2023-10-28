const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose=require("mongoose")
const express = require("express");
const UserRouter = require("./router/UserRouter");
const AdminRouter = require("./router/AdminRouter");
const BookRouter=require("./router/BookRouter");

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(UserRouter);
app.use(AdminRouter);
app.use(BookRouter);
mongoose.connect('mongodb://127.0.0.1:27017/newcar')

app.listen(8083,()=>{
    console.log("Server started!!!")
});