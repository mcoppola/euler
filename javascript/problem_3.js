// What is the largest prime factor 
// of the number 600851475143 ?

let n = 600851475143
let i = 2

while (i <= n) {
	if (n % i === 0) {
		n/=i 
	} else {
    i++
  }
}

console.log('largest prime is', i);