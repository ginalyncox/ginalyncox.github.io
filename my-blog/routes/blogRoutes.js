const express = require('express');
const router = express.Router();

// Import MongoDB model
const BlogPost = require('../models/BlogPost');

// Function for input validation
const validateInput = (data) => {
  // You can add more complex validation here.
  return data.title && data.content;
};

// GET all posts
router.get('/', async (req, res) => {
  try {
    const posts = await BlogPost.find();
    res.status(200).json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ message: 'Error fetching posts', error });
  }
});

// CREATE a new post
router.post('/', async (req, res) => {
  if (!validateInput(req.body)) {
    return res.status(400).json({ message: 'Invalid input' });
  }
  const newPost = new BlogPost(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(400).json({ message: 'Error creating post', error });
  }
});

// UPDATE a post by ID
router.put('/:id', async (req, res) => {
  try {
    if (!validateInput(req.body)) {
      return res.status(400).json({ message: 'Invalid input' });
    }
    const updatedPost = await BlogPost.findByIdAndUpdate(req.params.id, req.body, { new: true, useFindAndModify: false });
    res.status(200).json(updatedPost);
  } catch (error) {
    console.error('Error updating post:', error);
    res.status(400).json({ message: 'Error updating post', error });
  }
});

// DELETE a post by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedPost = await BlogPost.findByIdAndDelete(req.params.id, { useFindAndModify: false });
    res.status(200).json(deletedPost);
  } catch (error) {
    console.error('Error deleting post:', error);
    res.status(400).json({ message: 'Error deleting post', error });
  }
});

module.exports = router;
