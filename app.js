// app.js
const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config/config');
const { Sequelize } = require('sequelize');
const cors = require('cors');

const vendorRoutes = require('./routes/vendorRoutes');


const sequelize = new Sequelize(config.development);

// Test the database connection
sequelize.authenticate()
  .then(() => {
    console.log('Database connection established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });


const app = express();
app.use(cors());
app.use(bodyParser.json());


// Middleware to parse JSON requests
app.use(express.json());

// Use the vendor routes
app.use('/api', vendorRoutes);

// Basic route for testing
app.get('/', (req, res) => {
  res.send('API is working!');
});


// Start the server
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
