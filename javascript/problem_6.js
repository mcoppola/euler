// The sum of the squares of the first ten natural 
// numbers is,
// 1^2 + 2^2 + ... + 102 = 385
//
// The square of the sum of the first ten natural 
// numbers is,
// (1 + 2 + ... + 10)^2 = 55^2 = 3025
//
// Hence the difference between the sum of the squares
// of the first ten natural numbers and the square
// of the sum is 3025 − 385 = 2640.

// Find the difference between the sum of the squares 
// of the first one hundred natural numbers and the 
// square of the sum.

let range = Array(100).fill('').map((_, i) => i + 1)

const sumOfSquares = ns =>
  ns.map(n => 
    Math.pow(n, 2)
  )
  .reduce((a, c) => a + c, 0)

const squareOfSums = ns => 
  Math.pow(
    ns.reduce((a, c) => a + c, 0)
  , 2)

let difference = squareOfSums(range) - sumOfSquares(range)

console.log('answer is', difference)