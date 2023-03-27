const express = require('express');
const mongoose = require('mongoose');
const imageModel = require('./imageSchema');
const cors = require('cors');

mongoose.connect('mongodb+srv://mingh:MR52@cluster0.t3yxabv.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Error connecting to MongoDB', err);
});

// Create a new Express application
const app = express();
app.use(cors());

// Define a route for retrieving all images
app.get('/api/test', async (req, res) => {
  const images = await imageModel.find();
  res.json(images);
});

// Start the Express application
app.listen(3001, () => {
  console.log('Server listening on port 3001');
});