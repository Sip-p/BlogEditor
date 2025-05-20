const express=require('express')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const User = require('../models/User')


const router=express.Router()

router.post('/signup',async(req,res)=>{
    const{name,email,password}=req.body;
    const existinguser=await User.findOne({email});
    if(existinguser){
        return res.status(400).json({message:"User already exists"});   
    }
    const hashedPassword=await bcrypt.hash(password,10);
    const user=await User.create({
        name,email,password:hashedPassword
    });
    res.status(201).json({message:'User created succsessfully'})
})
router.post('/login',async(req,res)=>{
    const {email,password}=req.body;
    try {
        
     
    const user=await User.findOne({email});
    if(!user){
        return res.status(404).json({message:'user not found'});
    }
    const isMatch=await bcrypt.compare(password,user.password);
    if(!isMatch){
        return res.status(400).json({message:'Invalid credentials'});
    }
    
    const payload={userId:user._id,email:user.email}
    const token=jwt.sign(payload,process.env.JWT_SECRET)

    res.status(200).json({message:'Login succsessfully',jwt})
    } catch (error) {
        res.status(500).json({message:'Server Error'})
    }
});

 module.exports=router