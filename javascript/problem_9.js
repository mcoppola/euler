// A Pythagorean triplet is a set of three 
// natural numbers, a < b < c, for which,

// a^2 + b^2 = c^2
// For example, 32 + 42 = 9 + 16 = 25 = 52.

// There exists exactly one Pythagorean 
// triplet for which a + b + c = 1000.
// Find the product abc.

let ceil = 1000

const isPyTriplet = ([a, b, c]) => 
  Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)

const C = (a, b) => 
  Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))


for (let a = 1; a <= ceil; a++) {
  for (let b = a + 1; b <= ceil; b++) {
    let c = C(a, b)
    if (isPyTriplet([a, b, c]) && a + b + c === ceil) {
      console.log('product is', a*b*c)
      return
    }
  }
}