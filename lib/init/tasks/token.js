const _fetch = require('../../util/fetch')

function createAuthenticator (fetch) {
  fetch = fetch || _fetch

  async function authenticate (username, password) {
    if (username == null || password == null) {
      throw new TypeError('Credentials not provided')
    }

    const response = await fetch(
      `${process.env.MAGE_HOST}/rest/V1/integration/admin/token`,
      {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )

    const body = await response.json()

    return body
  }

  return authenticate
}

module.exports = createAuthenticator
