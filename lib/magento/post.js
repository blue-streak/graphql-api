const fetch = require('node-fetch')

function sendPost (endpoint, payload, token) {
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
  )
}

module.exports = sendPost
