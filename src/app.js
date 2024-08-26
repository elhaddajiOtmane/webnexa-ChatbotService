// File: src/app.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const leadRoutes = require('./routes/leadRoutes');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
const DATABASE_URI = process.env.DATABASE_URI || 'mongodb://localhost:27017/lead_management';
const dbName = 'lead_management';

mongoose.connect(DATABASE_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: dbName // Explicitly specify the database name
})
  .then(() => console.log(`Connected to MongoDB (${dbName})`))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Routes
app.use('/api/leads', leadRoutes);

const PORT = process.env.PORT || 0; // Use 0 to let the OS assign an available port
const server = app.listen(PORT, () => {
  const actualPort = server.address().port;
  console.log(`Server running on port ${actualPort}`);
});

module.exports = app;