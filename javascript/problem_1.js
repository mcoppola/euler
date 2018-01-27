let sum = 
	(Array(1000).fill(0))
	.map((x, i) => i)
	.filter(x => ((x % 3) === 0) || ((x % 5) === 0))
	.reduce((sum, x) => sum + x)

console.log('sum is', sum)
