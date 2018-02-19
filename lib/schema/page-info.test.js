/* eslint-env mocha */

const { expect } = require('chai')

const graphql = require('graphql')

const PageInfo = require('./page-info')

describe('Page Info data type', () => {
  it('Should be a GraphQL data type', () => {
    expect(PageInfo).to.be.an.instanceof(graphql.GraphQLObjectType)
  })

  it('Should have the correct fields', () => {
    const fields = PageInfo.getFields()

    expect(fields).to.have.property('hasPrevPage')
    expect(fields.hasPrevPage.type).to.equal(graphql.GraphQLBoolean)

    expect(fields).to.have.property('hasNextPage')
    expect(fields.hasNextPage.type).to.equal(graphql.GraphQLBoolean)
  })
})
