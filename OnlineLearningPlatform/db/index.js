const mongoose = require('mongoose');

const connectDB = async () => {
try {
    const res = await mongoose.connect(process.env.MONGOURL);
    console.log('MONGODB connected');
    
} catch (err) {
    console.error(err.message);
    process.exit(1);
}
}

module.exports = connectDB;