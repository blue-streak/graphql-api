/* eslint-env mocha */

const { expect } = require('chai')

const graphql = require('graphql')

const Products = require('./products')
const Product = require('./product')

describe('Products collection data type', () => {
  it('Should be a GraphQL data type', () => {
    expect(Products.type).to.be.an.instanceof(graphql.GraphQLObjectType)
  })

  it('Should have the correct pageInfo type', () => {
    expect(Products.type.getFields()).to.have.property('pageInfo')
  })

  it('Should have the correct edges type', () => {
    expect(Products.type.getFields()).to.have.property('edges')

    const edges = Products.type.getFields().edges.type

    expect(edges.ofType.name).to.equal('productEdge')
    expect(edges.ofType.getFields()).to.have.property('cursor')
    expect(edges.ofType.getFields()).to.have.property('node')
    expect(edges.ofType.getFields().node.type).to.equal(Product.type)
  })
})
