const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const app = express();
const url = 'mongodb://localhost:27017';
const database = 'test_db';
const Client = new MongoClient(url);

// Middleware to parse JSON data from the request body
app.use(express.json());

// Enable CORS for React frontend (you can also specify allowed origins if needed)
app.use(cors());

// POST route to handle adding a product to the database
app.post('/register', async (req, res) => {
  const { name, brand, price } = req.body;

  try {
    // Connect to MongoDB
    let result = await Client.connect();
    let db = result.db(database);
    let collection = db.collection('users');

    // New product data to insert
    const newUser = { name, brand, price };

    // Insert the new product
    let response = await collection.insertOne(newUser);
    
    // Respond with a success message
    res.json({ message: 'Product added successfully!', product: newUser });
  } catch (error) {
    // Handle any errors
    res.status(500).json({ message: 'Error adding product', error: error.message });
  }
});

// GET route to fetch all users
app.get('/users', async (req, res) => {
    try {
      // Connect to MongoDB
      let result = await Client.connect();
      let db = result.db(database);
      let collection = db.collection('users');
  
      // Fetch all users from the database
      let users = await collection.find({}).toArray();
  
      // Respond with the users data
      res.json(users);
    } catch (error) {
      // Handle any errors
      res.status(500).json({ message: 'Error fetching users', error: error.message });
    }
  });
  

// Start the Express server on port 5001
app.listen(5001, () => {
  console.log('Server running on http://localhost:5001');
});
