module.exports = {
  /**
   * Express configs
   */
  express: {
    port: 4000,
  },

  /**
   * API configs
   */
  api: {
    prefix: '/api',
  },

  /**
   * Camunda configs
   */
  camunda: {
    baseUrl: `${process.env.CAMUNDA_URL}/engine-rest`,
    username: 'demo',
    password: 'demo',
  },
};
