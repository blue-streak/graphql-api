const express = require('express')
const jwt = require('express-jwt')
const GraphQLHTTP = require('express-graphql')

const schema = require('./lib/schema')

const app = express()

const init = require('./lib/init')

init.subscribe((config) => {
  console.log(config.token)

  app.use(
    '/graphql',
    jwt({
      secret: 'shush',
      credentialsRequired: false
    })
  )

  app.use('/graphql', GraphQLHTTP({
    schema,
    graphiql: true
  }))

  app.listen(
    process.env.SERVE_PORT,
    () => console.log('Server ready')
  )
})
