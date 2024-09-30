// Import mongoose
const mongoose = require('mongoose');
const dotenv = require("dotenv");

dotenv.config()
// Connect to the database
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('MongoDB Connected...');
  } catch (error) {
    console.error('Database connection failed:', error);
    
  }
};

// Export the connection
module.exports = connectDB;
