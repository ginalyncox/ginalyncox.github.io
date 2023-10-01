const express = require('express');
const router = express.Router();

// Import MongoDB model
const BlogPost = require('./models/BlogPost');

// GET all posts
router.get('/', async (req, res) => {
  const posts = await BlogPost.find();
  res.json(posts);
});

// CREATE a new post
router.post('/', async (req, res) => {
  const newPost = new BlogPost(req.body);
  const savedPost = await newPost.save();
  res.json(savedPost);
});

// UPDATE a post
router.put('/:id', async (req, res) => {
  const updatedPost = await BlogPost.findByIdAndUpdate(req.params.id, req.body);
  res.json(updatedPost);
});

// DELETE a post
router.delete('/:id', async (req, res) => {
  const deletedPost = await BlogPost.findByIdAndDelete(req.params.id);
  res.json(deletedPost);
});

module.exports = router;
