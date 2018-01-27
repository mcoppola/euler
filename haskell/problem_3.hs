-- What is the largest prime factor 
-- of the number 600851475143 ?


module P3 where

	factors n = [x | x <- [1..n], mod n x == 0]

	prime n = factors n == [1,n]

	main = print (prime (factors 600851475143))