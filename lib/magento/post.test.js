/* eslint-env mocha */

const { expect } = require('chai')
const sinon = require('sinon')

const sendPost = require('./post')
const app = require('../app')

describe('Magento API POST manager', () => {
  it('Should require an endpoint and a payload', () => {
    expect(sendPost).to.be.a('function')
    expect(sendPost).to.throw(TypeError, '', 'Endpoint not required')
    expect(() => sendPost('')).to.throw(TypeError, '', 'Payload not required')
  })

  it('Should make a request', () => {
    const fetch = sinon.stub()
    fetch.returns(Promise.resolve({ json: () => Promise.resolve({}) }))

    app.locals = { token: '123456' }

    sendPost('/V1/endpoint', {}, fetch)

    expect(fetch.calledOnce).to.equal(true, 'Fetch was not called')
    expect(fetch.calledWith(`${process.env.MAGE_HOST}/rest/V1/endpoint`)).to.equal(true)
    expect(fetch.args[0][1].headers['Authorization']).to.equal('Bearer 123456')

    app.locals = {}
  })
})
