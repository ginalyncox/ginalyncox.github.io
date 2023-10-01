const express = require('express');
const router = express.Router();
const Blog = require('../models/blogModel');

// Sample route to get all blog posts
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

// Add more routes (e.g., for creating, updating, and deleting blog posts)

module.exports = router;
