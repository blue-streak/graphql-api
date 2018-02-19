const _fetch = require('../util/fetch')
const getToken = require('./token')

function getRequest (endpoint, fetch) {
  if (fetch == null) {
    fetch = _fetch
  }

  if (endpoint == null) {
    throw new TypeError('No endpoint specified')
  }

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${getToken()}`
  }

  const request = fetch(
    `${process.env.MAGE_HOST}/rest${endpoint}`,
    {
      method: 'GET',
      headers
    }
  )

  return request
}

module.exports = getRequest
