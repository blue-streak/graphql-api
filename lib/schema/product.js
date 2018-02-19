const graphql = require('graphql')
const sendGet = require('../magento/get')
const formatProduct = require('../formatter/product')

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
    },
    sku: {
      type: graphql.GraphQLString
    }
  },

  resolve: async (root, args) => {
    const endpoint = `/V1/products/${args.sku}`
    const response = await sendGet(endpoint)

    return formatProduct(response)
  }
}

module.exports = Product
