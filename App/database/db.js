const mongoose = require('mongoose');

const connectDb = async()=>{
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/student', {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }).then(() => {
        console.log("Connected to MongoDB");
      }).catch((err) => {
        console.error("Error connecting to MongoDB", err);
      });
}




module.exports = connectDb;
