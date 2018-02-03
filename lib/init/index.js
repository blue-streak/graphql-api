const Rx = require('rxjs')

const getToken = require('./tasks/token')

/**
 * App initialisation is handled by an Rx event stream.
 *
 * Tasks are created independently and registered here. Each is started,
 * and then merged into a single stream, then gated at the end, so a
 * complete configuration object is presented to the app to start.
 */
const tasks = {
  token: getToken().bind(null, process.env.MAGE_ADMIN_USERNAME, process.env.MAGE_ADMIN_PASSWORD)
}

const runTasks = require('./runner')

const init = Rx.Observable.create(runTasks(tasks))
  // Merge every task result together
  .scan((result, obj) => Object.assign({}, obj, result))
  // Only send a result when we know everything
  .last()

module.exports = init
