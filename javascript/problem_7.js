// By listing the first six prime numbers: 
// 2, 3, 5, 7, 11, and 13, we can see that 
// the 6th prime is 13.

// What is the 10,001st prime number?

const isPrime = n => {
  for(let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false
    }
  }
  return n > 1
}

let foundPrimes = 0
let i = 1

while(foundPrimes < 10001) {
  i++
  if (isPrime(i)) {
    foundPrimes++
  }
}
console.log('answer is', i)