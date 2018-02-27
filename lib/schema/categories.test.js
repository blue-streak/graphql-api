/* eslint-env mocha */

const { expect } = require('chai')

const graphql = require('graphql')

const Categories = require('./categories')

describe('Categories data type', () => {
  it('Should be a GraphQL data type', () => {
    expect(Categories.type).to.be.an.instanceof(graphql.GraphQLObjectType)
  })
})

describe('Categories arguments', () => {
  it('Should accept list of IDs', () => {
    expect(Categories.args).to.have.property('ids')
    expect(Categories.args.ids.type).to.be.an.instanceof(graphql.GraphQLList)
  })

  it('Should accept a level', () => {
    expect(Categories.args).to.have.property('level')
    expect(Categories.args.level.type).to.equal(graphql.GraphQLInt)
  })
})
