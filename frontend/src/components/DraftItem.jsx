import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DraftItem = ({ id, title, content, tag, status }) => {
  const [editBlog, setEditBlog] = useState(false);
  const navigate = useNavigate();

  const handleModifyClick = (e) => {
    e.preventDefault(); // Prevent Link from navigating
    setEditBlog(true);
    const draftData = { id, title, content, tag, status };
    localStorage.setItem('editDraft', JSON.stringify(draftData));
    navigate('/editor');
  };

  return (
    <div className="block">
      <div
        className="
          transform transition-transform duration-300 hover:scale-105
          rounded-xl shadow-lg border-2 border-[#ee9219]
          bg-white/25 bg-[url('/paper-texture.jpg')] bg-cover bg-center
          flex flex-col justify-between p-4

          w-full max-w-md     
          sm:w-full sm:max-w-sm  
          md:w-[30vw]           

          h-auto sm:h-[35vh]    

          break-words
        "
      >
        <div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white bg-cyan-900 mb-2 rounded-lg p-3 truncate" title={title}>
            {title}
          </h2>
          <p className="text-[#3a2e1e] text-xs sm:text-sm bg-white p-3 rounded-lg line-clamp-5" title={content}>
            {content
              ? content.length > 100
                ? content.slice(0, 100) + '...'
                : content
              : 'No content available.'}
          </p>
        </div>

        <div className="mt-4 flex justify-between items-center flex-wrap gap-2">
          <span className="inline-block bg-[#f3e5ab] text-[#5c4323] px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
            #{tag}
          </span>
          <button
            className="bg-sky-400 text-white rounded-lg px-3 py-1 hover:bg-sky-700 whitespace-nowrap"
            onClick={handleModifyClick}
          >
            Modify
          </button>
          <span className="text-xs text-gray-700 italic whitespace-nowrap">
            {status === 'Draft' ? '📝 Draft' : '✅ Published'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DraftItem;
