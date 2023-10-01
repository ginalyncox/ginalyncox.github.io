const express = require('express');
const router = express.Router();

// Import MongoDB model (No need to import it twice)
const BlogPost = require('../models/BlogPost');

// GET all posts
router.get('/', async (req, res) => {
  try {
    const posts = await BlogPost.find();  // Fetch all blog posts
    res.status(200).json(posts);          // Send a JSON response
  } catch (error) {
    res.status(500).json({ message: 'Error fetching posts' });  // 500: Internal Server Error
  }
});

// CREATE a new post
router.post('/', async (req, res) => {
  const newPost = new BlogPost(req.body); // Create a new BlogPost object
  try {
    const savedPost = await newPost.save(); // Save the new post
    res.status(201).json(savedPost);        // 201: Created
  } catch (error) {
    res.status(400).json({ message: 'Error creating post' }); // 400: Bad Request
  }
});

// UPDATE a post by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedPost = await BlogPost.findByIdAndUpdate(req.params.id, req.body, { new: true }); // Find post and update it
    res.status(200).json(updatedPost); // 200: OK
  } catch (error) {
    res.status(400).json({ message: 'Error updating post' }); // 400: Bad Request
  }
});

// DELETE a post by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedPost = await BlogPost.findByIdAndDelete(req.params.id); // Find post by ID and delete it
    res.status(200).json(deletedPost); // 200: OK
  } catch (error) {
    res.status(400).json({ message: 'Error deleting post' }); // 400: Bad Request
  }
});

module.exports = router;
