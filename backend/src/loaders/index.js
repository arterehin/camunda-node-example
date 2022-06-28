const express = require('./express');
const camunda = require('./camunda');
const subscribers = require('./subscribers');

module.exports = (app) => {
  express(app);
  subscribers(camunda);
};
