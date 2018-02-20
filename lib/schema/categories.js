const graphql = require('graphql')
const Category = require('./category')

const CategoriesType = new graphql.GraphQLList(Category.type)

const Categories = {
  type: CategoriesType,

  args: {
    ids: {
      type: graphql.GraphQLList(graphql.GraphQLID)
    }
  },

  resolve: async (root, args) => {
    return Promise.all(args.ids.map(id => Category.resolve(null, {id})))
  }
}

module.exports = Categories
