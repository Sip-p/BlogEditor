import axios from 'axios'
const API_URL='http://localhost:5000/api/blogs'
export const getBlogsByStatus=async(status)=>{
const res = await axios.get(`${API_URL}?status=${status}`)
  return res.data;
}

export const saveDraft=async(blog)=>{
  const res=await axios.post(API_URL,{...blog,status:'Draft'})
  return res.data;
}

export const publishBlog=async(blog)=>{
  const res=await axios.post(API_URL,{...blog,status:'Published'});
  return res.data;
}

export const updateBlog=async(id,blog)=>{
  const res=await axios.put(`${API_URL}/${id}`,blog);
  return res.data;
}
export const getBlogById = async (id) => {
try{
  const res=await axios.get(`${API_URL}/${id}`);
  return res.data;
}catch(error){
  throw new Error("Failed to fetch blog")
}
}
