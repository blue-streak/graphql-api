/* eslint-env mocha */

const { expect } = require('chai')

const graphql = require('graphql')

const edges = require('./edges')

describe('Edges constructor', () => {
  it('Should be a function', () => {
    expect(edges).to.be.a('function')
  })

  it('Should return a GraphQL data type', () => {
    const dummy = new graphql.GraphQLObjectType({ name: 'dummy' })
    const result = edges(dummy)

    expect(result).to.be.an.instanceof(graphql.GraphQLList)
  })

  it('Should be of the correct type', () => {
    const dummy = new graphql.GraphQLObjectType({ name: 'dummy' })
    const result = edges(dummy)

    expect(result.ofType.name).to.equal('dummyEdge')
  })

  it('Should have a cursor', () => {
    const dummy = new graphql.GraphQLObjectType({ name: 'dummy' })
    const result = edges(dummy)

    expect(result.ofType.getFields()).to.have.property('cursor')
    expect(result.ofType.getFields().cursor.type).to.equal(graphql.GraphQLID)
  })

  it('Should have a node', () => {
    const dummy = new graphql.GraphQLObjectType({ name: 'dummy' })
    const result = edges(dummy)

    expect(result.ofType.getFields()).to.have.property('node')
    expect(result.ofType.getFields().node.type).to.equal(dummy)
  })
})
