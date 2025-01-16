// Define a function sum that takes three numbers as parameters and returns their sum. Use 
// the spread operator to call this function with an array of numbers. 
 

function totalSum (num1,num2,num3){
   return num1 + num2 + num3;
}

let numbers = [1, 2, 3];
console.log(totalSum(...numbers));