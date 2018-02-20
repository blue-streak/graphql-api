const graphql = require('graphql')

const Products = require('./products')
const Category = require('./category')
const Categories = require('./categories')

const schema = new graphql.GraphQLSchema({
  query: new graphql.GraphQLObjectType({
    name: 'Query',
    fields: {
      products: Products,
      category: Category,
      categories: Categories
    }
  })
})

module.exports = schema
