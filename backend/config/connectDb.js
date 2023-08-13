const mongoose = require ("mongoose")
const connectDb=async()=>{
    try { 
        await mongoose.connect("mongodb+srv://malekkhelil:malek123@cluster0.gyhvff6.mongodb.net/")
        console.log("db is connected")
        
    } catch (error) {
        console.log("db is not connected")
    }
}
module.exports=connectDb