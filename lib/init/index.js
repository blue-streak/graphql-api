const getToken = require('./tasks/token')

/**
 * Each task is started concurrently, and the task runner exits once all
 * tasks have completed.
 *
 * If one of them fails, it throws that error back up the chain.
 */
const tasks = {
  token: getToken().bind(null, process.env.MAGE_ADMIN_USERNAME, process.env.MAGE_ADMIN_PASSWORD)
}

const runTasks = require('./runner')

module.exports = runTasks.bind(null, tasks)
