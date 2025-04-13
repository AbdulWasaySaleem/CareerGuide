import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

// Load .env variables
dotenv.config();

connectDB(); // Connect to the database

const app = express();

// Use an environment variable for PORT
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});