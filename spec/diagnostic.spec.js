'use strict'

const diagnostic = require('../lib/diagnostic')

const createCallback = function (expectedSum, done) {
  return function (error, sum) {
    if (error || sum !== expectedSum) {
      error = error || new Error(`sum is ${sum}`)
    }

    done(error)
  }
}

describe('Sum of lines', function () {
  it('for integers.txt, should equal 88', function (done) {
    diagnostic.sumLines('data/integers.txt', createCallback(88, done))
  })

  it('for blanks.txt, should equal 12', function (done) {
    diagnostic.sumLines('data/blanks.txt', createCallback(12, done))
  })

  it('for numbers.txt, should equal 12.93', function (done) {
    diagnostic.sumLines('data/numbers.txt', createCallback(12.93, done))
  })
})

describe('Sum of lines in strings.txt', function () {
  it('should pass an error', function (done) {
    diagnostic.sumLines('data/strings.txt', function (error) {
      if (error instanceof Error) {
        return done()
      }

      done(new Error(`${error}`))
    })
  })
})
