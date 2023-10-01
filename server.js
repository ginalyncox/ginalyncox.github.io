const express = require('express');
const mongoose = require('mongoose');

// Import BlogPost model
const BlogPost = require('./my-blog/models/BlogPost');

// Initialize Express App
const app = express();

// Middleware for body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myBlog', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

// Include Routes
const blogRoutes = require('./my-blog/routes/blogRoutes');
app.use('/api/blog', blogRoutes);

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
