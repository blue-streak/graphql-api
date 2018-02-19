/* eslint-env mocha */

const { expect } = require('chai')

const formatProduct = require('./product')

describe('Magento 2 Product Response Formatter', () => {
  it('Should format a successful response', async () => {
    const response = {
      json: () => Promise.resolve({
        id: 1,
        name: 'Testing Product',
        sku: 'TEST001',
        price: 1000
      })
    }

    expect(formatProduct).to.be.a('function')

    const result = await formatProduct(response)

    expect(result).to.deep.equal({
      id: 'cHJvZHVjdC9URVNUMDAx',
      name: 'Testing Product',
      sku: 'TEST001',
      price: 1000
    })
  })

  it('Should ignore extra data', async () => {
    const response = {
      json: () => Promise.resolve({
        id: 1,
        name: 'Testing Product',
        sku: 'TEST001',
        price: 1000,
        fakeData: 'not present'
      })
    }

    const result = await formatProduct(response)

    expect(result).to.not.have.property('fakeData')
  })
})
