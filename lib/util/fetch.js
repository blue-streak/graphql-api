const fetch = require('node-fetch')

function wrapper(url, params) {
  if (process.env.NODE_ENV == 'development') {
    const https = require('https')
    const agent = new https.Agent({
      rejectUnauthorized: false
    })

    params.agent = agent
  }

  return fetch(url, params)
}

module.exports = wrapper
