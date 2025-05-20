const mongoose=require('mongoose')
const DraftSchema=new mongoose.Schema({
 title:{
type:String, required:true,
 },
 content:{
 type:String,
        required:true,
 },
 tag:{
 type:String,
        required:true,
 }
 ,
 status:{
 type:String,enum:['Draft','Published'],default:'Draft'
 },
},{timestamps:true})

module.exports=mongoose.model("Draft",DraftSchema)