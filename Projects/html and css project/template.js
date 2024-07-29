
// Array Creation and Length:  
//Question:   Create an array of the first 10 natural numbers. What is the length of the array?
//Task:   Write a function that returns the length of an array.


// function lengthOfArray(arr){
//     arr = arr.length;
//     return arr;
// }
// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8 ,9 ,10];
// let result= lengthOfArray(arr1);
// console.log(result);


// problem 2
// Accessing Elements:  
// Question:   Create an array of your five favorite fruits. Write a function to return the second fruit in the array.

// let secondFruit = 2;
// function findTheElement(fruit){
//     fruit = fruit[secondFruit];
//     return fruit
// }
//  let fruits = ["Apple", "Mango", "Orange", "Banana", "Grap"];
//  let result = findTheElement(fruits);
//  console.log(result);


// Adding and Removing Elements:  
// Question:   Create an array of numbers. Add a number to the beginning and end of the array, then remove the first and last elements. What does the array look like after each operation?

// let arr= [1, 2, 3, 4, 5];
// let addStartElement = arr.unshift(0);
// console.log(arr[0]);
// let addLastElement = arr.push(6);
// console.log(arr.length-1);
// let removeFirstEle = arr.shift()
// let removeLastEle = arr.pop();
// console.log(arr);

// Array Iteration:  
// Question:   Create an array of 10 random numbers. Write a function to print each number multiplied by 2.
// Task:   Write a function that iterates over an array and prints each element.

// function multipliedByTwo(arr){
//     let eachArr = [];
//     for(let i= 0; i < arr.length; i++){
//         eachArr.push(arr[i] * 2);
//     }
//     return eachArr;
    
// }
// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = multipliedByTwo(arr1);
// console.log(result);


// Array Methods:
// Question: Given an array of numbers, use the `map` method to create a new array with each number squared.
// Task: Write a function that uses the `filter` method to return all even numbers from an array.

// function filterAndMap(arr) {
//     let evenNumbers = arr.filter(number => number % 2 === 0);
//     let squaredNumbers = evenNumbers.map(number => number * number);    
//     return squaredNumbers;
// }

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = filterAndMap(numbers);
// console.log(result);


// Sorting Arrays:
// Question: Create an array of names. Write a function to sort the array in alphabetical order.
// Task: Write a function that sorts an array of numbers in descending order.

// function fruitsNames(fruit) {
//     return fruit.sort();
// }
// const fruits = ["Apple", "Mango", "Orange", "Banana", "Grap"];
// const fruitsDetails = fruitsNames(fruits);
// console.log(fruitsDetails);

// Array Reduction:
// Question: Given an array of numbers, use the `reduce` method to find the sum of all the elements.
// Task: Write a function that returns the product of all elements in an array using `reduce`.

// function newFunction(arr){
//    return arr.reduce((accumulator, currentValue) => accumulator + currentValue);
// }
// let arr1 = [1, 2, 3, 4, 5];
// console.log(newFunction(arr1));


// Combining Arrays:
// Question: Given two arrays, combine them into a single array without duplicates.
// Task: Write a function that merges two arrays and removes any duplicate values.

// function concatTwo(arr1, arr2){
//     let concatTwoArr = arr1.concat(arr2)
//     let result = [...new Set(concatTwoArr)];
//     return result;
// }
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [1, 6, 8, 4];
// let  removeduplicate = concatTwo(arr1, arr2);
// console.log(removeduplicate);

// Complex Transformations:
// Question: Given an array of objects representing students (with properties `name` and `score`), write a function that returns the names of students who scored above 75.
// Task: Write a function that takes an array of objects and returns a new array of strings based on a specific property.

// function getNamesOfStudentsAboveScore(students, scoreAbove) {
//     let filteredStudents = students.filter(student => student.score > scoreAbove);
//     let names = filteredStudents.map(student => student.name); 
//     return names;
// }
// let students = [
//     { name: 'Kishor', score: 80 },
//     { name: 'Raju', score: 60 },
//     { name: 'Hari', score: 90 },
//     { name: 'Rani', score: 70 }
// ];
// let scoreAbove = 75;
// let result = getNamesOfStudentsAboveScore(students, scoreAbove);
// console.log(result);

// Reverse an Array:
//Problem: Write a function to reverse an array without using the built   in `reverse` method.

// function reverseArray(arr1){
//     let reversedArray = [];
//     for(let i =arr1.length-1; i>=0; i--){
//         reversedArray.push(arr1[i]);
//     }
//     return reversedArray;
// }
// let arr1 = [1, 2, 3, 4, 5]; 
// let revrese = reverseArray(arr1);
// console.log(revrese);
