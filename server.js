const express = require('express');
const mongoose = require('mongoose');

// Import BlogPost model
const BlogPost = require('./models/BlogPost');

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
const blogRoutes = require('./routes/blogRoutes');
app.use('/api/blog', blogRoutes);

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

// Test post (comment out when done testing)
const testPost = new BlogPost({
  title: "Test Post",
  content: "This is a test post.",
});

testPost.save()
  .then(() => console.log("Test post saved"))
  .catch(err => console.log("Could not save test post: ", err));
