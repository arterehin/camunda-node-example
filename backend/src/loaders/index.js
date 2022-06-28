const express = require('./express');
const camunda = require('./camunda');
const services = require('../services')

module.exports = (app) => {
  const appServices = services();

  express(app, appServices);
  require('../subscribers')(camunda, appServices);
};
