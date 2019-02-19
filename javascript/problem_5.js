// 2520 is the smallest number that can be 
// divided by each of the numbers from 1 to 10 
// without any remainder.

// What is the smallest positive number 
// that is evenly divisible by all of the 
// numbers from 1 to 20?

let ceil = 20
let range = Array(ceil).fill('').map((_, i) => i + 1)

const divisibleByRange = n => 
  range.every(i => n % i === 0)

let n = ceil
while(!divisibleByRange(n)) {
  n++
}

console.log('answer is', n);