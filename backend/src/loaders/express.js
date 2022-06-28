const config = require('../config');
const routes = require('../api');

module.exports = (app, services) => {
  app.use(config.api.prefix, routes(services));
}