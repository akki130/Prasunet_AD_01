const mongoose = require('mongoose');

mongoose.connect('your_mongo_connection_string')
.then(() => {
    console.log('MongoDB connected successfully.');
})
.catch(err => {
    console.error('MongoDB connection error:', err);
});
