const express = require('express');
const router = express.Router();
const camunda = require('./routes/camunda');

module.exports = () => {
  camunda(router);

  return router;
};
