// import React, { useEffect, useState } from 'react';
// import BlogItem from './BlogItem';
// import { getBlogsByStatus } from '../Services/blogService';
// import { useNavigate } from 'react-router-dom';
 
//  const BlogList = () => {
//   const [blogs, setBlogs] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchPublishedBlogs = async () => {
//       try {
//         const published = await getBlogsByStatus('Published');
//         setBlogs(published);
//       } catch (err) {
//         console.error('Error fetching published blogs', err);
//       }
//     };
//     fetchPublishedBlogs();
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('user');
//     navigate('/login');
//   };

//   return (
//     <div className="min-h-screen bg-[url('bg3.webp')] bg-cover bg-center p-4 sm:p-8 flex flex-col">
//       <header className="flex flex-col sm:flex-row justify-between items-center bg-black bg-opacity-80 text-white rounded-md p-4 mb-8 gap-4">
//         <h1 className="text-2xl sm:text-4xl font-bold text-center sm:text-left flex-1">
//           Published Blogs
//         </h1>
//         <div className="flex gap-3 justify-center sm:justify-end flex-wrap">
//           <button
//             className="bg-red-600 hover:bg-red-700 transition text-white px-4 py-2 rounded-md w-full sm:w-auto"
//             onClick={handleLogout}
//           >
//             Logout
//           </button>
//           <button
//             className="bg-red-600 hover:bg-red-700 transition text-white px-4 py-2 rounded-md w-full sm:w-auto"
//             onClick={() => navigate('/')}
//           >
//             Home
//           </button>
//         </div>
//       </header>

//       {blogs.length > 0 ? (
//         <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
//           {blogs.map((blog, idx) => (
//             <BlogItem
//               key={idx}
//               id={blog._id}
//               title={blog.title}
//               content={blog.content}
//               tag={blog.tag}
//               status={blog.status}
//             />
//           ))}
//         </main>
//       ) : (
//         <p className="text-center text-white text-lg mt-10 flex-grow">
//           No published blogs are available
//         </p>
//       )}
//     </div>
//   );
// };

// export default BlogList;




import React, { useEffect, useState } from 'react';
import BlogItem from './BlogItem';
import { getBlogsByStatus } from '../Services/blogService';
import { useNavigate } from 'react-router-dom';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPublishedBlogs = async () => {
      try {
        const published = await getBlogsByStatus('Published');
        setBlogs(published);
      } catch (err) {
        console.error('Error fetching published blogs', err);
      }
    };
    fetchPublishedBlogs();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-[url('/pg2.jpg')] bg-cover bg-center p-4 sm:p-6 lg:p-10 flex flex-col">
      {/* Header */}
      <header className="flex flex-col sm:flex-row justify-between items-center bg-black bg-opacity-80 text-white rounded-lg p-4 mb-6 gap-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center sm:text-left flex-1">
          Published Blogs
        </h1>
        <div className="flex gap-3 flex-wrap justify-center sm:justify-end">
          <button
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition w-full sm:w-auto"
            onClick={handleLogout}
          >
            Logout
          </button>
          <button
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition w-full sm:w-auto"
            onClick={() => navigate('/')}
          >
            Home
          </button>
        </div>
      </header>

      {/* Blog Grid */}
      {blogs.length > 0 ? (
        <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
          {blogs.map((blog, idx) => (
            <BlogItem
              key={idx}
              id={blog._id}
              title={blog.title}
              content={blog.content}
              tag={blog.tag}
              status={blog.status}
            />
          ))}
        </main>
      ) : (
        <p className="text-center text-white text-lg mt-10 flex-grow">
          No published blogs are available.
        </p>
      )}
    </div>
  );
};

export default BlogList;
