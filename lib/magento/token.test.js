/* eslint-env mocha */

const { expect } = require('chai')

const getToken = require('./token')
const app = require('../app')

describe('Magento token service', () => {
  it('Should get the admin token', () => {
    app.locals = { token: '123456' }

    expect(getToken).to.be.a('function')
    expect(getToken()).to.equal('123456')

    app.locals = {}
  })
})
