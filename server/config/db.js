import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoURI = process.env.MONGO_URI;

// Function to connect to the database
const connectDB = async () => {
  try {
    // Connect to MongoDB with the specified options
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected...');
  } catch (error) {
    console.error('Database connection failed:', error.message);
    process.exit(1); // Exit process with failure
  }
};



export default connectDB;
