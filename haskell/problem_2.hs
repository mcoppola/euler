-- By considering the terms in the Fibonacci 
-- sequence whose values do not exceed four million, 
-- find the sum of the even-valued terms.


module P2 where

	fibs :: [Integer]
	fibs = 0 : 1 : zipWith (+) fibs (tail fibs)

	list :: [Integer]
	list = filter even (takeWhile (< 4000000) fibs)

	main :: IO ()
	main = print (sum list)