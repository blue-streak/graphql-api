/* eslint-env mocha */

const { expect } = require('chai')

const runTasks = require('./runner')

describe('Application initialisation', () => {
  it('Should be a function', () => {
    expect(runTasks).to.be.a('function')
  })

  it('Should generate an object', async () => {
    const tasks = {
      first: () => Promise.resolve('first'),
      second: () => 'second'
    }

    const result = await runTasks(tasks)

    expect(result).to.deep.equal({ first: 'first', second: 'second' })
  })

  it('Should throw an error if a task fails', async () => {
    const tasks = {
      bad: () => Promise.reject(new Error('hello, world'))
    }

    try {
      const result = await runTasks(tasks)
      expect(result).to.equal(false, 'Task runner did not cancel')
    } catch (e) {
      expect(e).to.be.an.instanceof(Error)
    }
  })
})
