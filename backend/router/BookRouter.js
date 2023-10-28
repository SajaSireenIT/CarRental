const express=require("express");

const BookService = require("../services/BookService");
const BookRouter = express.Router();
BookRouter.get("/Book/:uname", async(req, res) => {
    var { uname} = req.params;
    var order = await BookService.getBookByUname(uname);
    res.json(order);
  });
  module.exports=BookRouter;