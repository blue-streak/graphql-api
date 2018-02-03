function createAuthenticator (connection) {
  if (connection == null) {
    throw new TypeError('Connection is required')
  }

  async function authenticate (username, password) {
    if (username == null || password == null) {
      throw new TypeError('Credentials not provided')
    }

    const response = await connection.post(
      '/V1/integration/admin/token',
      { username, password }
    )

    console.log(response)
  }

  return authenticate
}

module.exports = createAuthenticator
