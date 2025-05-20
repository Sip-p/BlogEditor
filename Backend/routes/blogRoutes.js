const express = require('express');
const router = express.Router();
const blogController=require('../controller/blogcontroller');
console.log('blogController:',blogController)
router.post('/',blogController.createBlog);
router.get('/',blogController.getAllBlogs);
router.put('/:id',blogController.updateBlog)
 

module.exports = router;
