// https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript

// The natural numbers below 10 that are multiples of 3 or 5 are t 3, 5, 6 and 9. The sum of these multiples is 23.

//  Return sum of all the multiples of 3 or 5 below the number passed in.

// Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number) {
  let sum = 0;

  //  If the current number in the loop divides by 3 or 5,  then it’s a multiple, and I can add it to sum, the running total.
  for (let i = 1; i < number; i++) {
    if (!(i % 3) || !(i % 5)) {
      sum += i;
    }
  }
  return sum;
}

solution(60);
