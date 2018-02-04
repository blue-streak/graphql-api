const map = require('lodash/map')
const values = require('lodash/values')

async function runTasks (tasks) {
  const result = {}

  // Run a single "task", which is just a function that returns a
  // promise or a value
  const runTask = (task, key) => Promise.resolve(task())
    .then(taskResult => (result[key] = taskResult))
    .catch(error => { throw error })

  const runningTasks = map(tasks, runTask)

  // When they all complete, we need to complete the observable
  const config = await Promise.all(values(runningTasks)).then(() => result)

  return config
}

module.exports = runTasks
