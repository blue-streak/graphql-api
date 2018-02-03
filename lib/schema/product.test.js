/* eslint-env mocha */

const { expect } = require('chai')

const graphql = require('graphql')

const Product = require('./product')

describe('Product data type', () => {
  it('Should be a GraphQL data type', () => {
    expect(Product.type).to.be.an.instanceof(graphql.GraphQLObjectType)
  })

  it('Should have key product fields', () => {
    expect(Product.type.getFields()).to.have.property('id')
    expect(Product.type.getFields().id.type).to.equal(graphql.GraphQLID, 'ID not correct type')

    expect(Product.type.getFields()).to.have.property('sku')
    expect(Product.type.getFields().sku.type).to.equal(graphql.GraphQLString, 'SKU not correct type')

    expect(Product.type.getFields()).to.have.property('name')
    expect(Product.type.getFields().name.type).to.equal(graphql.GraphQLString, 'Name not correct type')

    expect(Product.type.getFields()).to.have.property('price')
    expect(Product.type.getFields().price.type).to.equal(graphql.GraphQLInt, 'Price not correct type')
  })
})

describe('Product arguments', () => {
  it('Should accept argument by ID', () => {
    expect(Product.args).to.have.property('id')
    expect(Product.args.id.type).to.equal(graphql.GraphQLID)
  })
})

describe('Product resolver', () => {
  it('Should return a product', () => {
    expect(Product.resolve()).to.deep.equal({ id: '1', name: 'First Product', sku: 'PROD_1', price: 9999 })
  })
})
