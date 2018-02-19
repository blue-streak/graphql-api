const graphql = require('graphql')

const PageInfo = new graphql.GraphQLObjectType({
  name: 'pageInfo',

  fields: {
    hasPrevPage: {
      type: graphql.GraphQLBoolean
    },

    hasNextPage: {
      type: graphql.GraphQLBoolean
    }
  }
})

module.exports = PageInfo
