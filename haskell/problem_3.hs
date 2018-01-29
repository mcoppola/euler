-- What is the largest prime factor 
-- of the number 600851475143 ?


module P3 where

  factors :: Int -> [Int]
  factors m = f m (head primes) (tail primes) where
    f m n ns
      | m < 2 = []
      | m < n ^ 2 = [m]   -- stop early
      | m `mod` n == 0 = n : f (m `div` n) n ns
      | otherwise = f m (head ns) (tail ns)


  primes :: [Int]
  primes = 2 : filter (\n-> head (factors n) == n) [3,5..]


  main :: IO ()
  main = print (last (factors 600851475143))