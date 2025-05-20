import React, { useState } from 'react'
import {useNavigate} from 'react-router'
import axios from 'axios'
const Login = () => {
    const Navigate=useNavigate()
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

const handleLogin=async(e)=>{
e.preventDefault()
    try {
        const res=await axios.post('http://localhost:5000/api/blogs/login',{email,password})
        localStorage.setItem('token',res.data.token)
        localStorage.setItem('user',JSON.stringify(res.data.user))
        Navigate('/')
    } catch (error) {
        alert('Invalid credentials')
    }
}

  return (
     <form onSubmit={handleLogin} className='max-w-md mx-auto mt-20 p-6 bg-white shadow-md rounded-lg'>
        <h1 className='bg-blue-600 p-3 m-3 text-white text-3xl flex justify-center'>Login</h1>
        <input type='text' name='email' value={email} onChange={(e)=>setEmail(e.target.value)} required className='w-full p-2 mb-4 border rounded'/>
        <input type='password' name='password' value={password} onChange={(e)=>setPassword(e.target.value)} required className='w-full p-2 mb-4 border rounded'/>
        <button type='submit' className='bg-red-600 text-white w-full p-2 rounded hover:bg-red-700' >Login</button>
     </form>
  )
}

export default Login