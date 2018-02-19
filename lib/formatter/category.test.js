/* eslint-env mocha */

const { expect } = require('chai')

const formatCategory = require('./category')

describe('Magento 2 Category Response Formatter', () => {
  it('Should format a successful response', async () => {
    const response = {
      json: () => Promise.resolve({
        id: 12,
        parent_id: 4,
        name: 'Testing Category'
      })
    }

    expect(formatCategory).to.be.a('function')

    const result = await formatCategory(response)

    expect(result).to.deep.equal({
      id: 'Y2F0ZWdvcnkvMTI=',
      parentId: 'Y2F0ZWdvcnkvNA==',
      name: 'Testing Category',
      products: []
    })
  })
})
