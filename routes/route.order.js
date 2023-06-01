const express=require("express");
const { order, orderbyid, updatestatus } = require("../controller/order.controller");
const authentication = require("../middleware/auth");
// console.log(order)
const orderRouter=express.Router();

orderRouter.post('/order',authentication,order)
orderRouter.get('/order/:id',authentication,orderbyid)
orderRouter.put('/order/:id',authentication,updatestatus)



module.exports=orderRouter