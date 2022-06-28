const express = require('express');
const routes = require('./routes');
const camunda = require('./camunda');

// Constants
const PORT = 4000;

// App
const app = express();
app.use('/', routes());

// Init camunda
camunda();

app.listen(PORT, function () {
  console.log(`Backend is running on port ${PORT}!`);
});
