const _fetch = require('node-fetch')

function sendPost (endpoint, payload, fetch) {
  if (fetch == null) {
    fetch = _fetch
  }

  if (endpoint == null || payload == null) {
    throw new TypeError('No endpoint and/or payload specified')
  }

  const headers = {
    'Content-Type': 'application/json'
  }

  return fetch(
    `${process.env.MAGE_HOST}/rest${endpoint}`,
    {
      method: 'POST',
      body: JSON.stringify(payload),
      headers
    }
  ).then((resp) => resp.json())
}

module.exports = sendPost
