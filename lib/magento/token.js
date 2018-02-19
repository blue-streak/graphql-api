const app = require('../app')

function getToken () {
  return app.locals.token
}

module.exports = getToken
