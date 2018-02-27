/* eslint-env mocha */

const { expect } = require('chai')

const graphql = require('graphql')

const Category = require('./category')
const Products = require('./products')

describe('Category data type', () => {
  it('Should be a GraphQL data type', () => {
    expect(Category.type).to.be.an.instanceof(graphql.GraphQLObjectType)
    expect(Category.type.name).to.equal('category')
  })

  it('Should have key category fields', () => {
    const fields = Category.type.getFields()

    expect(fields).to.have.property('id')
    expect(fields.id.type).to.equal(graphql.GraphQLID, 'ID not correct type')

    expect(fields).to.have.property('parentId')
    expect(fields.parentId.type).to.equal(graphql.GraphQLID, 'Parent ID not correct type')

    expect(fields).to.have.property('name')
    expect(fields.name.type).to.equal(graphql.GraphQLString, 'Name not correct type')

    expect(fields).to.have.property('products')
    expect(fields.products.type).to.equal(Products.type, 'Products not correct type')

    expect(fields).to.have.property('image')
    expect(fields.image.type).to.equal(graphql.GraphQLString, 'Image not correct type')

    expect(fields).to.have.property('children')
  })
})

describe('Category arguments', () => {
  it('Should accept arguments by ID', () => {
    expect(Category.args).to.have.property('id')
    expect(Category.args.id.type).to.equal(graphql.GraphQLID)
  })
})
