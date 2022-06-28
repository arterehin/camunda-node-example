const { Client, logger, BasicAuthInterceptor } = require('camunda-external-task-client-js');
const config = require('../config');

const client = new Client({
  baseUrl: config.camunda.baseUrl,
  interceptors: new BasicAuthInterceptor({
    username: config.camunda.username,
    password: config.camunda.password,
  }),
  use: logger,
});

module.exports = client;
