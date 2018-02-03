const map = require('lodash/map')
const values = require('lodash/values')

function createSubscriber (tasks) {
  return function subscribe (observer) {
    // Run a single "task", which is just a function that returns a
    // promise or a value
    const runTask = (task, key) => Promise.resolve(task())
      .then(result => observer.next({ [key]: result }))
      .catch(error => observer.error(error))

    const runningTasks = map(tasks, runTask)

    // When they all complete, we need to complete the observable
    Promise.all(values(runningTasks)).then(() => observer.complete())
  }
}

module.exports = createSubscriber
