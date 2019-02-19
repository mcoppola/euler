// The sum of the primes below 10 is 
// 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below 
// two million.

let ceil = 2000000

const isPrime = n => {
  for(let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false
    }
  }
  return n > 1
}

let sum = 
  Array(ceil)
  .fill('')
  .map((_, i) => i)
  .filter(i => isPrime(i))
  .reduce((a, c) => a + c)

  
console.log('sum is', sum);