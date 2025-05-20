import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
  const Navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignup = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:5000/api/blogs/signup', {
        name,
        email,
        password,
      })
      localStorage.setItem('token', res.data.token)
      Navigate('/')
    } catch (error) {
      alert('Signup failed',error)
    }
  }

  return (
    <form
      onSubmit={handleSignup}
      className="max-w-md mx-auto mt-20 p-6 bg-white shadow-md rounded-lg"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>

      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full p-2 mb-4 border rounded"
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full p-2 mb-4 border rounded"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="w-full p-2 mb-4 border rounded"
      />

      <button
        type="submit"
        className="bg-green-600 text-white w-full p-2 rounded hover:bg-green-700"
      >
        Sign Up
      </button>
      <h1 className='flex justify-center'>Already have an account?<button onClick={()=>Navigate('/login')}>Login</button></h1>
    </form>
  )
}

export default Signup
