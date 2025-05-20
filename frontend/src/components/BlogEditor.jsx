import { useEffect, useState } from 'react';
import BlogItem from './BlogItem';
import { publishBlog, saveDraft } from '../Services/blogService';
import { useNavigate } from 'react-router-dom';

const BlogEditor = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tag, setTag] = useState('');
  const [lastSavedTime, setLatSavedTime] = useState(null);
  const [showblog, setShowblog] = useState(false);
  const [status, setStatus] = useState('Draft');
  const [draft, setDraft] = useState('');
  const [showdraft, setShowdraft] = useState(false);
  const Navigate = useNavigate();

  useEffect(() => {
    const draftToEdit = JSON.parse(localStorage.getItem('editDraft'));
    if (draftToEdit) {
      setTitle(draftToEdit.title);
      setContent(draftToEdit.content);
      setTag(draftToEdit.tag);
      localStorage.removeItem('editDraft');
    }
  }, []);

  useEffect(() => {
    let timer = setTimeout(() => {
      handleSavedDraft();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [title, content, tag]);

  const handleSavedDraft = async () => {
    const blogData = {
      title,
      content,
      tag,
      status: 'draft',
    };
    try {
      const response = await saveDraft(blogData);
      setLatSavedTime(new Date().toLocaleTimeString());
      console.log('Saved');
      setContent('');
      setTag('');
      setTitle('');
    } catch (error) {
      console.log('Error in Saving', error);
    }
  };

  const handleseeDrafts = () => {
    const saveDraft = JSON.parse(localStorage.getItem('drafts')) || [];
    setDraft(saveDraft);
    setShowdraft(true);
  };

  const handleEditDraft = (index) => {
    const selectedDraft = draft[index];
    setTitle(selectedDraft.title);
    setContent(selectedDraft.content);
    setTag(selectedDraft.tag);
    setShowdraft(false);
  };

  const handlePublish = async () => {
    const blogData = {
      title,
      content,
      tag,
      status: 'Published',
    };
    try {
      const response = await publishBlog(blogData);
      console.log('Publish');
      setContent('');
      setTag('');
      setTitle('');
    } catch (error) {
      console.log('Error in publishing', error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen mt-2">
      {/* Left side with background image */}
      <div
        className="md:w-1/2 w-full h-64 md:h-screen bg-cover bg-center hidden md:block ml-2 mb-8"
        style={{ backgroundImage: "url('/pg2.jpg')" }}
      ></div>

      {/* Right side - Editor */}
      <div className="w-full md:w-1/2 bg-white flex flex-col justify-center items-center p-4 sm:p-6 md:p-10">
        <div className="bg-white shadow-xl rounded-xl w-full max-w-2xl p-4 sm:p-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">Write Your Blog</h2>

          <input
            className="w-full mb-4 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            name="title"
            placeholder="Enter Your Title here"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            className="w-full mb-4 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            name="content"
            placeholder="You can enter your content here"
            rows={8}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <input
            className="w-full mb-4 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            name="tag"
            placeholder="Any Tag?"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          />

          <div className="flex flex-col sm:flex-row flex-wrap justify-between gap-3 mt-4">
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition w-full sm:w-auto"
              onClick={handleSavedDraft}
            >
              Save Draft
            </button>
            <button
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition w-full sm:w-auto"
              onClick={handlePublish}
            >
              Publish
            </button>
            <button
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition w-full sm:w-auto"
              onClick={() => Navigate('/blogs')}
            >
              See Blog
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition w-full sm:w-auto"
              onClick={() => Navigate('/drafts')}
            >
              See Drafts
            </button>
          </div>

          {lastSavedTime && (
            <p className="mt-4 text-sm text-gray-500">Last saved at {lastSavedTime}</p>
          )}

          {showblog && (
            <div className="mt-6">
              <BlogItem title={title} content={content} tag={tag} status={status} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogEditor;
