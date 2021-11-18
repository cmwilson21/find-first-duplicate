function findFirstDuplicate(arr) {
  // type your code here

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// iterate over the array and see if x = x output x
// else, output -1


// And a written explanation of your solution


// // Given an Array, find the first duplicate value that occurs. If there are no duplicates, return -1.
// function findFirstDuplicate(arr) {
//   // create a set to store the values
//   let set = new Set();
//   // iterate over the array
//   for (let i = 0; i < arr.length; i++) {
//     // if the value is in the set, return the value
//     if (set.has(arr[i])) {
//       return arr[i];
//     } else {
//       // otherwise, add the value to the set
//       set.add(arr[i]);
//     }
//   }