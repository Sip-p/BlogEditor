const Blog=require('../models/Blog');
const Draft=require('../models/Draft')
exports.createBlog = async (req, res) => {
  try {
    const blog = new Blog(req.body);
    await blog.save();
    res.status(201).json(blog);
  } catch (error) {
    console.error('Error creating blog:', error);
    res.status(500).json({ message: 'Failed to create blog', error: error.message });
  }
}

///////||||||above
exports.getAllBlogs=async(req,res)=>{
    const {status}=req.query;
    const blogs=status?await Blog.find({status}):await Blog.find();
    res.json(blogs);
}
////below
exports.updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    if (blog.status === 'Published') {
      return res.status(403).json({ message: 'Cannot update published blog' });
    }

    const updated = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (error) {
    console.error('Error updating blog:', error);
    res.status(500).json({ message: 'Failed to update blog', error: error.message });
  }
};