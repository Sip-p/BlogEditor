import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import BlogEditor from '../components/BlogEditor'
import { useNavigate } from 'react-router-dom'
const EditorPage = ({publishedBlog,setPublishedBlog}) => {
   const [isAuthenticated,setIsAuthenticated]=useState(true);

   const Navigate=useNavigate();

const handleLogout=()=>{
  localStorage.removeItem('user');
  setIsAuthenticated(false);
  Navigate('/login')
}
  return (
    <div> 
      <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout}/>
       <BlogEditor/>
    </div>
  )
}

export default EditorPage