import React, { useEffect } from 'react'
import { getBlogsByStatus } from '../Services/blogService';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { updateBlog } from '../../../Backend/controller/blogcontroller';
import DraftItem from './DraftItem';
const DraftList = () => {
  const [blogs, setBlogs] = useState([]);
  const Navigate=useNavigate()
  const[isAuthenticated,setIsAuthenticated]=useState(true)
  useEffect(() => {
    const fetchdraftblogs = async () => {
      try {
        const draft = await getBlogsByStatus('Draft')
        setBlogs(draft)
      }
      catch (err) {
        console.error('Error fethcing published blogs', err);

      }
    };
    fetchdraftblogs();
  }, [])

const handleLogout=()=>{
  localStorage.removeItem('user');
  setIsAuthenticated(false);
  Navigate('/login')
}

  return (
    
<div className='p-8 bg-[url("bg4.jpg")]  bg-cover bg-center min-h-screen'>
 <div className="flex justify-between items-center p-4 bg-black text-white mb-9">
  <h1 className='text-4xl font-bold '>Saved Drafts</h1>
  
  <div className=" space-x-3">
   <button className="hover:bg-red-700 bg-red-600 p-2 m-3 rounded-lg" onClick={handleLogout}>Logout</button>
        <button className="hover:bg-red-700 bg-red-600 p-2 m-3 rounded-lg" onClick={()=>Navigate('/')}>Home</button>
  </div>
</div>


    {blogs.length > 0 ? (
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {blogs.map((blog, idx) => (
          <DraftItem
            key={idx}
            id={blog._id}
            title={blog.title}
            content={blog.content}
            tag={blog.tag}
            status={blog.status}
          />
        ))}
      </div>
    ) : (
      <p>No published blogs are available</p>
    )}
  </div>
);

  
}

export default DraftList