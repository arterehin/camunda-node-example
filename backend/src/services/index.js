const Camunda = require('./camunda');

module.exports = () => ({
  camunda: new Camunda(),
});