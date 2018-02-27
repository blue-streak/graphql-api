const graphql = require('graphql')
const Product = require('./product')
const edges = require('./edges')
const PageInfo = require('./page-info')

const ProductsType = new graphql.GraphQLObjectType({
  name: 'products',

  fields: {
    pageInfo: {
      type: PageInfo
    },

    edges: {
      type: edges(Product.type)
    }
  }
})

module.exports = {
  type: ProductsType,

  resolve: () => {
    return {
      pageInfo: {},
      edges: {}
    }
  }
}
