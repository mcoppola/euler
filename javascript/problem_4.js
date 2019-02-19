// A palindromic number reads the same both ways. 
// The largest palindrome made from the product 
// of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product 
// of two 3-digit numbers.

const isPalindrome = x => 
  (x + '')
    .slice(0, (x + '').length/2) 
  === 
  (x + '')
    .slice((x + '').length/2)
    .split('')
    .reverse()
    .join('')

let a = 999,
    b = a

while (!isPalindrome(a * b)) {
  if (b === a - 99) {
    a--
    b = a
  } else {
    b--
  }
}
console.log(a, b, a*b);