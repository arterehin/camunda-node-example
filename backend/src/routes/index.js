const express = require('express');
const router = express.Router();
const handlers = require('./handlers');

module.exports = () => {
  handlers.forEach((handler) => {
    handler(router);
  });

  return router;
};
