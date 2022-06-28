const express = require('express');
const config = require('./config');

// App
const app = express();

// Loaders
require('./loaders')(app);

app.listen(config.express.port, function () {
  console.log(`Backend is running on port ${config.express.port}!`);
});
