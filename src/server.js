const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/users', userRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

if (process.env.NODE_ENV !== 'test') {
  if (process.env.NODE_ENV === 'development') {
    require('dotenv').config();
    const nodemon = require('nodemon');
    nodemon({
      script: 'src/server.js',
      ext: 'js',
      ignore: ['tests/*'],
    });
  }
  
  if (process.env.NODE_ENV === 'production') {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  }
}

module.exports = app;
