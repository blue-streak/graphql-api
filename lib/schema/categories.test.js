/* eslint-env mocha */

const { expect } = require('chai')

const graphql = require('graphql')

const Categories = require('./categories')

describe('Categories data type', () => {
  it('Should be a GraphQL data type', () => {
    expect(Categories.type).to.be.an.instanceof(graphql.GraphQLList)
    expect(Categories.type.ofType.name).to.equal('category')
  })
})

describe('Categories arguments', () => {
  it('Should accept list of IDs', () => {
    expect(Categories.args).to.have.property('ids')
    expect(Categories.args.ids.type).to.be.an.instanceof(graphql.GraphQLList)
  })
})
