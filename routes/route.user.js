const express=require("express");
const { register, login, updatepassword } = require("../controller/user.controller");
const userRouter=express.Router();

userRouter.post('/register',register)
userRouter.post('/login',login)
userRouter.put('/user/:id/reset',updatepassword)
userRouter.patch('/user/:id/reset',updatepassword)


module.exports=userRouter;