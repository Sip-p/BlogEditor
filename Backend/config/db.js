// const mongoose=require('mongoose');
// const connectDB=async()=>{
//     try{
//      await mongoose.connect(process.env.MONGO_URI,{
        
//      });
//      console.log('MongoDB connected');
//     }
//     catch(err){
//       console.log('MongoDB connection failed',err.message)
//     }
// }

// module.exports=connectDB;




 const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection FAILED:', error.message);
   
  }
};

module.exports = connectDB;
