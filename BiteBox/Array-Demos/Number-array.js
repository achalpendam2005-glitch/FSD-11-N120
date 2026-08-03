//Take one array array name is 
let numArray=[90,78,55,44,33,99,44,22,89,11];

//Print the array in reverse  
console.log("Array in reverse order: " + numArray.reverse());

//Print the array in order manner
console.log("Array in sorted order: " + numArray.sort());

//To insert new element in an array
numArray.push(77);
console.log("After inserting 77, the new Array is: " + numArray);

// Remove the last element
numArray.pop();
console.log("After pop, the new Array is: " + numArray);

//Shift()
numArray.shift();
console.log("After shift, the new Array is: " + numArray);
let a=[1,2,3];
let b=[4,5,6];

//to combine two arrays
console.log("Combine a + b array: " + a.concat(b));


// Matrix
let matrix = [
  [1, 1, 1],
  [2, 3, 4],
  [5, 6, 7]
];

console.log("Matrix printing using for loop:");
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}