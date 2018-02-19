const graphql = require('graphql')

function edges (node) {
  const edge = new graphql.GraphQLObjectType({
    name: `${node.name}Edge`,

    fields: {
      cursor: {
        type: graphql.GraphQLID
      },

      node: {
        type: node
      }
    }
  })

  return new graphql.GraphQLList(edge)
}

module.exports = edges
