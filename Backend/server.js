// const express=require('express')
// const cors=require('cors')
// const dotenv=require('dotenv')
// const connectDB=require('./config/db');
// dotenv.config();
// connectDB();
// const PORT=5000
// const app=express();
// // app.use(cors())
// app.use(express.json());
// const morgan = require('morgan');
// app.use(morgan('dev'));

// // // app.use('/api/blogs',blo)
// // const blogRoutes = require('./routes/blogRoutes');
// // app.use('/api/blogs', blogRoutes);
// // app.get('/test', (req, res) => {
// //   res.send('Backend is working');
// // });
// app.get('/', (req, res) => {
//   res.send('Backend is running!');
// });

// app.listen(PORT,()=>{
//     console.log(`Server running at port ${PORT}`)
// })



const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('./config/db');

connectDB();

app.use(express.json());
app.use(cors());
const morgan = require('morgan');
app.use(morgan('dev'));

const blogRoutes = require('./routes/blogRoutes');
const authRoutes=require('./routes/authRoutes')
app.use('/api/blogs',blogRoutes);
app.use('/api/blogs',authRoutes)
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello! Backend is working...');
});

app.listen(PORT, (err) => {
  if (err) {
    console.error('Failed to start server:', err);
  } else {
    console.log(`Server running on port ${PORT}`);
  }
});
