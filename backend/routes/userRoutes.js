const express=require("express")
const user = require("../models/user")
const { Login, Logout, Register} = require("../controllers/controllerUser")
const { validation, loginvalidation, registervalidation } = require("../middleware/validator")
const userRoutes=express.Router()


userRoutes.post("/register",registervalidation,validation,Register)
userRoutes.post("/login",loginvalidation,validation,Login)
userRoutes.get("/logout",Logout)



module.exports=userRoutes