/* eslint-env mocha */

const { expect } = require('chai')

const runTasks = require('./runner')

const Rx = require('rxjs')

describe('Application initialisation', () => {
  it('Should be a function', () => {
    expect(runTasks).to.be.a('function')
  })

  it('Should create an Rx Observable', (done) => {
    const tasks = {
      first: () => Promise.resolve('first'),
      second: () => 'second'
    }

    const observable = Rx.Observable.create(runTasks(tasks))
      .scan((result, obj) => Object.assign({}, obj, result))
      .last()

    observable.subscribe((result) => {
      expect(result).to.deep.equal({ first: 'first', second: 'second' })
      done()
    })
  })

  it('Should throw an error if a task fails', (done) => {
    const tasks = {
      bad: () => Promise.reject(new Error('hello, world'))
    }

    const observable = Rx.Observable.create(runTasks(tasks))

    observable.subscribe({
      error: (e) => {
        expect(e).to.be.an.instanceof(Error)
        done()
      },
      complete: () => {
        expect(false).to.equal(true, 'Observable completed when it should have failed')
        done()
      }
    })
  })
})
