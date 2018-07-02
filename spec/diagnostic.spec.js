'use strict'

const chai = require('chai')

const expect = chai.expect
const diagnosticResponse = require('../lib/diagnostic')

describe('Sum of lines', function () {
  it('for integers.txt, should equal 88', function (done) {
    const diagnostic = Object.assign({}, diagnosticResponse)
    diagnostic.sumLines('data/integers.txt')
    setTimeout(() => {
      expect(diagnostic.sum).to.eq(88)
      done()
    }, 300)
  })

  it('for blanks.txt, should equal 12', function (done) {
    const diagnostic = Object.assign({}, diagnosticResponse)
    diagnostic.sumLines('data/blanks.txt')
    setTimeout(() => {
      expect(diagnostic.sum).to.eq(12)
      done()
    }, 300)
  })

  it('for numbers.txt, should equal 12.93', function (done) {
    const diagnostic = Object.assign({}, diagnosticResponse)
    diagnostic.sumLines('data/numbers.txt')
    setTimeout(() => {
      expect(diagnostic.sum).to.eq(12.93)
      done()
    }, 300)
  })

  it('for strings.txt, should equal null', function (done) {
    const diagnostic = Object.assign({}, diagnosticResponse)
    diagnostic.sumLines('data/strings.txt')
    setTimeout(() => {
      expect(diagnostic.sum).to.eq(null)
      done()
    }, 300)
  })
})
