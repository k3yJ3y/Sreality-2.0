const express = require('express');
const bodyParser = require('body-parser');

const client = require('./util/db');

const propertyRoutes = require('./routes/property-routes');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  next();
});

//routers
app.use('/api/v1/properties', propertyRoutes);

// Error handling
app.use((error, req, res, next) => {
  console.error('Error:', error);
  res.status(500).json({ message: 'Something went wrong.' });
});

const PORT = process.env.PORT || 5000;

// Connect to the database
client
  .connect()
  .then(() => {
    console.log('Connected to PostgreSQL database');
    // scrapeSreality();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to PostgreSQL:', err);
  });

// Gracefully close the database connection when the server is stopped
process.on('SIGINT', () => {
  client
    .end()
    .then(() => {
      console.log('Disconnected from PostgreSQL database');
      process.exit(0);
    })
    .catch((err) => {
      console.error('Error disconnecting from PostgreSQL:', err);
      process.exit(1);
    });
});
