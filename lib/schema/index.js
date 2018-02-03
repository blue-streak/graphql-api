const graphql = require('graphql')

const Product = require('./product')
const Token = require('./token')

const schema = new graphql.GraphQLSchema({
  query: new graphql.GraphQLObjectType({
    name: 'Query',
    fields: {
      product: Product,
      token: Token
    }
  })
})

module.exports = schema
