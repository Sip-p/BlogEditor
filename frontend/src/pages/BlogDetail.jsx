 import React, { useEffect } from 'react'
 import {useParams} from 'react-router-dom'
 import { getBlogById } from '../Services/blogService'
 const BlogDetail = () => {
    const {id}=useParams()
    const [blog,setBlog]=useState(null);
    useEffect(()=>{
        const fetchBlog=async()=>{
            try {
                const data=await getBlogById(id);
                setBlog(data)
            } catch (error) {
                console.log('Error in fetching blog detail',error)
            }
        }
        fetchBlog()
    },[id])
    if(!blog) return <p>Pending...</p>
   return (
     <div className='p-8'> 
     <h1>{blog.title}</h1>
     <p>{blog.content}</p>
     <p>Tag:#{blog.tag}</p>

     </div>
   )
 }
 
 export default BlogDetail