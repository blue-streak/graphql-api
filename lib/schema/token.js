const graphql = require('graphql')

const TokenType = new graphql.GraphQLObjectType({
  name: 'token',

  fields: {
    token: {
      type: graphql.GraphQLString
    }
  }
})

const Token = {
  type: TokenType,

  args: {
    username: {
      type: graphql.GraphQLString
    },

    password: {
      type: graphql.GraphQLString
    }
  },

  resolve: (root, args) => ({
    token: 'acce55'
  })
}

module.exports = Token
