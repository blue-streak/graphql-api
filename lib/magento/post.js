const _fetch = require('../util/fetch')
const getToken = require('./token')

function sendPost (endpoint, payload, fetch) {
  if (fetch == null) {
    fetch = _fetch
  }

  if (endpoint == null || payload == null) {
    throw new TypeError('No endpoint and/or payload specified')
  }

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${getToken()}`
  }

  const request = fetch(
    `${process.env.MAGE_HOST}/rest${endpoint}`,
    {
      method: 'POST',
      body: JSON.stringify(payload),
      headers
    }
  )

  return request
}

module.exports = sendPost
