const express=require("express")
const user = require("../models/user")
const { Login, Logout} = require("../controllers/controllerUser")
const { validation, loginvalidation } = require("../middleware/validator")
const userRoutes=express.Router()



userRoutes.post("/login",loginvalidation,validation,Login)
userRoutes.get("/logout",Logout)


module.exports=userRoutes