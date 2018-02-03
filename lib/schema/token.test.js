/* eslint-env mocha */

const { expect } = require('chai')

const graphql = require('graphql')

const Token = require('./token')

describe('Token type', () => {
  it('Should be a GraphQL data type', () => {
    expect(Token.type).to.be.an.instanceof(graphql.GraphQLObjectType)
  })

  it('Should have a token field that is a string', () => {
    expect(Token.type.getFields()).to.have.a.property('token')
    expect(Token.type.getFields().token.type).to.equal(graphql.GraphQLString)
  })
})

describe('Token arguments', () => {
  it('Should accept username', () => {
    expect(Token.args).to.have.property('username')
    expect(Token.args.username.type).to.equal(graphql.GraphQLString)
  })

  it('Should accept password', () => {
    expect(Token.args).to.have.property('password')
    expect(Token.args.password.type).to.equal(graphql.GraphQLString)
  })
})

describe('Token resolver', () => {
  it('Should be a product', () => {
    expect(Token.resolve).to.be.a('function')
  })
})
