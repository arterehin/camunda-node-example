const { Client, logger, BasicAuthInterceptor } = require('camunda-external-task-client-js');
const handlers = require('./handlers');

const client = new Client({
  baseUrl: `${process.env.CAMUNDA_URL}/engine-rest`,
  interceptors: new BasicAuthInterceptor({
    username: 'demo',
    password: 'demo',
  }),
  use: logger,
});

module.exports = () => {
  handlers.forEach((handler) => {
    handler(client);
  });
};
