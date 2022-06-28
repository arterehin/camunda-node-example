const express = require('express');
const router = express.Router();
const camunda = require('./routes/camunda');

module.exports = (services) => {
  camunda(router, services);

  return router;
};
