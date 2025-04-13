import express from 'express';
import dotenv from 'dotenv';

// Load .env variables
dotenv.config();

const app = express();

// Use an environment variable for PORT
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});