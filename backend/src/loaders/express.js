const config = require('../config');
const routes = require('../api');

module.exports = (app) => {
  // Load API routes
  app.use(config.api.prefix, routes());
}