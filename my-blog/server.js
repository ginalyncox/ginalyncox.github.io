const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost/my-blog', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.log('Could not connect to MongoDB', error));

app.get('/', (req, res) => {
    res.send('Hello, Gina!');
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000/');
});
const mongoose = require('mongoose');

// Connection URI. Replace <dbname> with your database name.
const dbURI = 'mongodb://localhost/<blog>';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));

app.use(express.static('public'));

