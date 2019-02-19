// By considering the terms in the Fibonacci 
// sequence whose values do not exceed four million, 
// find the sum of the even-valued terms.

let ceil = 4000000


// generates fib sequence until last n
// is greater than ceil, then sums the
// even values
let sum = (ns = [0,1]) => 
  ns[ns.length - 1] > ceil 
  ? ns
    .slice(0, ns.length - 1)
    .filter(x => x % 2 === 0)
    .reduce((a, v) => a + v, 0)
  : sum(
      ns.concat(
          [ns[ns.length - 1] + ns[ns.length - 2]]
        )
      )

console.log('sum is', sum())