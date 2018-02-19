const graphql = require('graphql')
const Products = require('./products')
const formatCategory = require('../formatter/category')

const { decode } = require('../util/id')
const sendGet = require('../magento/get')

const CategoryType = new graphql.GraphQLObjectType({
  name: 'category',

  fields: {
    id: {
      type: graphql.GraphQLID
    },

    parentId: {
      type: graphql.GraphQLID
    },

    name: {
      type: graphql.GraphQLString
    },

    products: {
      type: Products.type
    },

    image: {
      type: graphql.GraphQLString
    }
  }
})

const Category = {
  type: CategoryType,

  args: {
    id: {
      type: graphql.GraphQLID
    }
  },

  resolve: async (root, args) => {
    const id = decode(args.id)

    if (id.type !== 'category') {
      throw new TypeError(
        `Invalid category ID. ${args.id} is of type ${id.type}.`
      )
    }

    const endpoint = `/V1/categories/${id.id}`
    const response = await sendGet(endpoint)

    return formatCategory(response)
  }
}

module.exports = Category
