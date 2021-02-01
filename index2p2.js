
// PART 2 of task 2 of the slack activity
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
//invert([1,-2,3,-4,5]) === [-1,2,-3,4,-5]


// create a function
const invert = (numbers) => {
    // iterate over each item
    for (let i = 0; i < numbers.length; i++) {
      // in each iteration apply maths for that number
      numbers[i] = -numbers[i]; 
    }
    // return each of the numbers to the new array
    return numbers;
  }
  // call the function
  console.log(invert([1,-2,3,-4,5]));