const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');


const mediaRoutes = require('./routes/mediaRoutes');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/chintu/media', mediaRoutes);

mongoose.connect(process.env.MONGO_URI, {
 
})
.then(() => {
  console.log('MongoDB connected', process.env.MONGO_URI);
  app.listen(process.env.PORT || 5000, () => {
    console.log('Server running on port', process.env.PORT || 5000);
  });
})
.catch(err => console.error('MongoDB connection failed:', err));
