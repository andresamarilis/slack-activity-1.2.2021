
// PART 1 of task 2 of the slack activity
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
//invert([1,2,3,4,5]) === [-1,-2,-3,-4,-5]



// invert([1,2,3,4,5]) === [-1,-2,-3,-4,-5]
const numbers = [1,2,3,4,5];
// create a function
const invert = () => {
  let result = [];
  // iterate over each item
  for (item of numbers) {
    // in each iteration apply maths for that number
    result.push(-item); 
  }
  // return each of the numbers to the new array
  return result;
}
// call the function
console.log(invert());






