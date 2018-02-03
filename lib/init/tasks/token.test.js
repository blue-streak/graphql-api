/* eslint-env mocha */

const { expect } = require('chai')
const sinon = require('sinon')

const getToken = require('./token')

describe('Magento 2 Authenticator', () => {
  it('Should be a constructor', () => {
    expect(getToken).to.be.a('function')
  })

  it('Should require a username and password', async () => {
    const fetch = sinon.spy()
    const authenticate = getToken(fetch)

    try {
      await authenticate()
      expect(false).to.equal(true, 'No exception thrown without credentials')
    } catch (e) {
      expect(e).to.be.an.instanceof(TypeError)
    }
  })

  it('Should post to Magento endpoint', async () => {
    const fetch = sinon.stub()
    fetch.returns({ json: () => '' })
    const authenticate = getToken(fetch)

    const username = 'admin'
    const password = 'password123'

    await authenticate(username, password)

    expect(fetch.calledOnce).to.equal(true)
    expect(fetch.getCall(0).args[0]).to.equal(`${process.env.MAGE_HOST}/rest/V1/integration/admin/token`)
  })
})
