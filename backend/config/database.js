const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const dbURI = (process.env.NODE_ENV === 'production') ? 'mongodb://localhost:27017/UserDataBase' : 'mongodb://0.0.0.0:27017/UserDataBase';

    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB Connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
