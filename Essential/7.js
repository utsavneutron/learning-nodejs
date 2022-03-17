/**
 * @param {number[]} numbers An array of numbers.
 * @return {number[]} An array of unique numbers. 
 */
function findUniqueNumbers(numbers) {
  // Your code goes here
  var obj = {};
  for (var i=0; i< numbers.length; i++) {
    obj[numbers[i]] = (obj[numbers[i]] || 0) + 1;
  }
  arr = []
  for(let[key,value] of Object.entries(obj)){
    if(value == 1){
      arr.push(parseInt(key))
    }
  }
  return arr
}

let result = findUniqueNumbers([ 1, 2, 1, 3 ]);
console.log(result);