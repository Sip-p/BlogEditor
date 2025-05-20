import React from 'react';
import { Link } from 'react-router-dom';

const BlogItem = ({ id, title, content, tag, status }) => {
  return (
    <Link to={`/blog/${id}`} className="block w-full">
      <div className="transform transition-transform duration-300 hover:scale-105 rounded-xl shadow-lg border-2 border-[#ee9219] bg-white/30 bg-[url('/bg.jpg')] bg-cover bg-center p-4 flex flex-col justify-between
        w-full max-w-full sm:max-w-sm md:max-w-md h-full
      ">
        {/* Title */}
        <h2
          className="text-lg sm:text-xl md:text-2xl font-bold text-white bg-cyan-900 rounded-lg p-3 mb-2 truncate"
          title={title}
        >
          {title}
        </h2>

        {/* Content */}
        <p
          className="text-[#3a2e1e] text-sm bg-white p-3 rounded-lg break-words line-clamp-5"
          title={content}
        >
          {content ? (content.length > 100 ? content.slice(0, 100) + '...' : content) : 'No content available.'}
        </p>

        {/* Footer */}
        <div className="mt-4 flex justify-between items-center flex-wrap gap-2">
          <span className="inline-block bg-[#f3e5ab] text-[#5c4323] px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
            #{tag}
          </span>
          <span className="text-xs text-gray-700 italic whitespace-nowrap">
            {status === 'Draft' ? '📝 Draft' : '✅ Published'}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BlogItem;