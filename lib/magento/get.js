const _fetch = require('node-fetch')

function getRequest (endpoint, fetch) {
  if (fetch == null) {
    fetch = _fetch
  }

  if (endpoint == null) {
    throw new TypeError('No endpoint specified')
  }

  const headers = {
    'Content-Type': 'application/json'
  }

  return fetch(
    `${process.env.MAGE_HOST}/rest${endpoint}`,
    {
      method: 'GET',
      headers
    }
  ).then((resp) => resp.json())
}

module.exports = getRequest
