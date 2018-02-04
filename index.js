const express = require('express')
const jwt = require('express-jwt')
const GraphQLHTTP = require('express-graphql')

const schema = require('./lib/schema')

const app = express()

const init = require('./lib/init')

function start (config) {
  process.env.APP_CONFIG = config
  console.log(config)

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
    process.env.API_PORT,
    () => console.log(`Server ready on port ${process.env.API_PORT}`)
  )
}

init()
  .then(start)
  .catch((err) => console.log(err))

/**
 * Docker containers send a SIGTERM by default,
 * right now we don't need any teardown, but could
 * be placed here if needed
 */
process.on('SIGTERM', function () {
  process.exit()
})
