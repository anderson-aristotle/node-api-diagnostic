// Write a function to sum the numbers in a file.

// This function should take the name of a plain text file with one number per
// line, as in data/integers.txt.

// It should add all the numbers and set `this.sum` equal to the result. So,
// for instance, if you've stored the result of the calculation ina variable
// called `total`, you would write `this.sum = total`. Use the tests to check
// your work.

// Blank lines should be ignored. If it comes across any lines that aren't
// numbers, e.g. the word "hello", your function should set `this.sum` to `null`

'use strict'

// used by tests, do not modify
const diagnostic = {}

const fs = require('fs')

diagnostic.sumLines = function (filename) {
  fs.readFile(filename, { encoding: 'utf8' }, (err) => {
    if (err) {
      console.log(err)
    }
    const lines = data.split('\n')
    const numbers = line.filter(line => line.length > 0)

    this.sum = numbers.some(isNaN)
  })
}

module.exports = diagnostic
