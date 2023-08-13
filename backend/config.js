const mongoose = require ("mongoose")
const config=async()=>{
    try { 
        await mongoose.connect("mongodb+srv://malekkhelil:malek123@cluster0.gyhvff6.mongodb.net/test")
        console.log("connetion reussi")
        
    } catch (error) {
        console.log("erreur de connexionn")
    }
}
module.exports=config