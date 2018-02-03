/* eslint-env mocha */

const { expect } = require('chai')
const sinon = require('sinon')

const createAuthenticator = require('./auth')

describe('Magento 2 Authenticator', () => {
  it('Should be a constructor', () => {
    expect(createAuthenticator).to.be.a('function')
  })

  it('Should require an API connection', () => {
    expect(createAuthenticator).to.throw(TypeError)

    const connection = {}
    const authenticate = createAuthenticator(connection)

    expect(authenticate).to.be.a('function')
  })

  it('Should require a username and password', async () => {
    const connection = {
      post: sinon.spy()
    }

    const authenticate = createAuthenticator(connection)

    try {
      await authenticate()
      expect(false).to.equal(true, 'No exception thrown without credentials')
    } catch (e) {
      expect(e).to.be.an.instanceof(TypeError)
    }
  })

  it('Should post to Magento endpoint', async () => {
    const connection = {
      post: sinon.spy()
    }

    const authenticate = createAuthenticator(connection)

    const username = 'admin'
    const password = 'password123'

    await authenticate(username, password)

    expect(connection.post.calledOnce).to.equal(true)
    expect(connection.post.getCall(0).args[0]).to.equal('/V1/integration/admin/token')
    expect(connection.post.getCall(0).args[1]).to.deep.equal({ username, password })
  })
})
