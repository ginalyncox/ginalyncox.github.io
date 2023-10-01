const express = require('express');
const mongoose = require('mongoose');

// Initialize Express App
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myBlog', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

const blogRoutes = require('./blogRoutes');
app.use('/api/blog', blogRoutes);
