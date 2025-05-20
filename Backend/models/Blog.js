const mongoose=require('mongoose')
const blogschema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    }
    ,
     content:{
        type:String,
        required:true,
    },
     tag:{
        type:String,
        required:true,
    },
    status:{
        type:String,enum:['Draft','Published'],
    },
        
    
},{timestamps:true})
module.exports=mongoose.model("Blog",blogschema)