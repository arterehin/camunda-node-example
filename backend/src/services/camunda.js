const fetch = require('isomorphic-fetch');
const config = require('../config');

class Camunda {
  fetch({ method = 'GET', path, body }) {
    return fetch(`${config.camunda.baseUrl}${path}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${Buffer.from(`${config.camunda.username}:${config.camunda.password}`).toString(
          'base64'
        )}`,
      },
      body,
    });
  }

  start(key, body) {
    return this.fetch({
      method: 'POST',
      path: `/process-definition/key/${key}/start`,
      body,
    });
  }

  setVars(id, vars) {
    return this.fetch({
        path: `/process-instance/${id}/variables`,
        method: 'POST',
        body: JSON.stringify({
            modifications: vars
        })
    })
  }
}

module.exports = Camunda;
