const graphql = require('graphql')

const ProductType = new graphql.GraphQLObjectType({
  name: 'product',

  fields: {
    id: {
      type: graphql.GraphQLID
    },

    sku: {
      type: graphql.GraphQLString
    },

    name: {
      type: graphql.GraphQLString
    },

    price: {
      type: graphql.GraphQLInt
    }
  }
})

const Product = {
  type: ProductType,

  args: {
    id: {
      type: graphql.GraphQLID
    }
  },

  resolve: (root, args) => ({
    id: '1',
    name: 'First Product',
    sku: 'PROD_1',
    price: 9999
  })
}

module.exports = Product
