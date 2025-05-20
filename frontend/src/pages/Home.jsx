import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

// Typing animation component
const TypewriterText = () => {
  const texts = ['✍️ Express Ideas', '✨Inspire Readers', '🚀 Grow Your Voice']
  const [textIndex, setTextIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
   

  useEffect(() => {
    const currentText = texts[textIndex]
    let charIndex = 0
    setDisplayedText('')

    const typingInterval = setInterval(() => {
      if (charIndex < currentText.length) {
        setDisplayedText((prev) => prev + currentText.charAt(charIndex))
        charIndex++
      } else {
        clearInterval(typingInterval)
        setTimeout(() => {
          setTextIndex((prevIndex) => (prevIndex + 1) % texts.length)
        }, 1500) // Wait before next text
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [textIndex])

  return (
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-6xl font-extrabold text-center mt-16 text-black"
    >
      {displayedText}
      <span className="animate-pulse">|</span>
    </motion.h1>
  )
}

// Home page component
const Home = () => {
  const Navigate = useNavigate()
   const [isAuthenticated,setIsAuthenticated]=useState(false);

  useEffect(()=>{
    const user=localStorage.getItem('user')
    setIsAuthenticated(!!user);
  },[])
 
const handleProtectedNavigation=(path)=>{
  if(!isAuthenticated){
    alert("Please Login or Signup to continue ")
    Navigate('/signup');
    return;
  }
  Navigate(path)
}
const handleLogout=()=>{
  localStorage.removeItem('user');
  setIsAuthenticated(false);
  Navigate('/login')
}
  return (
    <div className="min-h-screen bg-[url('/bg.jpg')] bg-cover bg-center">
      <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout}/>

      {/* Typing animation text */}
       

      {/* Action buttons */}
      <div className="flex justify-end p-4">
        <button
          className="bg-blue-600 text-white p-2 m-2 rounded-lg hover:bg-blue-700 transition"
          onClick={() => handleProtectedNavigation('/editor')}
        >
          Write New Blog
        </button>
        <button
          className="bg-green-600 text-white p-2 m-2 rounded-lg hover:bg-green-700 transition"
          onClick={() => handleProtectedNavigation('/blogs')}
        >
          Show Published Blogs
        </button>
      </div>
      <TypewriterText />
    </div>
  )
}

export default Home
