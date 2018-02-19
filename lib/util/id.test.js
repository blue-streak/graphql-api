/* eslint-env mocha */

const { expect } = require('chai')

const { encode, decode } = require('./id')

describe('Node identifier encoder', () => {
  it('Should have an encode function', () => {
    expect(encode).to.be.a('function')
  })

  it('Should generate a string from type and ID', () => {
    const type = 'product'
    const id = 5321

    expect(encode(type, id)).to.be.a('string')
  })

  it('Should be unique', () => {
    const first = encode('product', 5321)
    const second = encode('product', 5322)

    expect(first).not.to.equal(second)
  })
})

describe('Node identifier decoder', () => {
  it('Should have a decode function', () => {
    expect(decode).to.be.a('function')
  })

  it('Should return an object', () => {
    const encoded = 'Y3VzdG9tZXIvMTIyNTE='

    expect(decode(encoded)).to.be.an('object')
  })

  it('Should be reflexive', () => {
    const type = 'cart'
    const id = '4e32ab'

    expect(decode(encode(type, id))).to.deep.equal({ type, id })
  })
})
