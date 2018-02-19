const graphql = require('graphql')

const Products = require('./products')
const Category = require('./category')

const schema = new graphql.GraphQLSchema({
  query: new graphql.GraphQLObjectType({
    name: 'Query',
    fields: {
      products: Products,
      category: Category
    }
  })
})

module.exports = schema
