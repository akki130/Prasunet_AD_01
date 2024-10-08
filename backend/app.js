const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/dashboardApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use('/auth', authRoutes);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

