/* eslint-env mocha */

const { expect } = require('chai')

const get = require('./get')

describe('Magento API GET request', () => {
  it('Should be a function', () => {
    expect(get).to.be.a('function')
  })
})
