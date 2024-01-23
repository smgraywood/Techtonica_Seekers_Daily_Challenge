/*
Sum All Numbers in a Range

We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

EXAMPLES:
sumAll([1, 4]) should return a number.
sumAll([1, 4]) should return 10.
sumAll([4, 1]) should return 10.
sumAll([5, 10]) should return 45.
sumAll([10, 5]) should return 45.


SOLUTION OPTIONS / PSEUDOCODE
For Loop, Arr.some(), isNaN, ...spreadOperator, Math.min(), & Math.max()
- Math.min(...arr) => Math.min(10...or...5)
- map() to create new array inclusive of 5 to 10

EDGE CASES
- negative numbers
- non-strings
- coercive data types with isNaN (checking against NaN)
- typeOf === 'number'
 
*/

function sumAll(arr){
  if(arr.some(isNaN)){
    return "use valid numbers";
  }
  
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  let starterNum = 0
  for(let i = min; i <= max; i++){
    // 5, 6, 7, 8, 9, 10
    starterNum += i //starterNum = starterNum + i
  }
  return starterNum;
}

console.log(sumAll([{1: 2}, 3, 'sarah'])); // "use valid numbers"
console.log(sumAll([1, 4])) // a number.
console.log(sumAll([1, 4])) // 10.
console.log(sumAll([4, 1])) // 10.
console.log(sumAll([5, 10])) // 45.
console.log(sumAll([10, 5])) // 45.
