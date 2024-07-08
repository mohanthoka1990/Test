// TASK 1
// let a = 10;

// let b = 10;

// Add B to A
// console.log(a+b);

// Subtract 
// a = 20;
// console.log(a-b);

// Subtract 
// b = 30;
// console.log(b-a);

// a += a;
// console.log(a);

// b += b;
// console.log(b);

// let age = 12;


// TASK 2

// let percentage = 90;

// if(percentage >= 40 && percentage < 50){
//     console.log("Buy a pen");
// } else if(percentage >= 50 && percentage < 60){
//     console.log("Buy a Book");
// }else if(percentage >= 60 && percentage < 70){
//     console.log("Buy a Bag");
// }else if(percentage >= 70 && percentage < 80){
//     console.log("Buy a Watch");
// }else if(percentage >= 80 && percentage < 90){
//     console.log("Buy a Phone");
// }else if(percentage >= 90 && percentage < 100){
//     console.log("Buy an Laptop");
// }else{
//     console.log("Fail");
// }

//TASK 3

// let number = 11;

// if(number%2 === 0){
//     console.log("The given number is even");
//     number = number * 2
//     console.log("Double of the number is: " + number);
// }else{
//     console.log("The given number is odd");
//     number += 2;
//     console.log("Adding 2 to the number results in: " + number);
// }

//TASK 4

// let firstNumber = 20;
// let secondNumber = 10;

// let operation = "/";

// if(operation === "+"){
//     result = firstNumber + secondNumber;
//     console.log(result);
// } else if(operation === "-"){
//     result = firstNumber - secondNumber
//     console.log(result);
// } else if(operation === "*"){
//     result = firstNumber * secondNumber
//     console.log(result);
// }else if(operation === "/"){
//     result = firstNumber / secondNumber
//     console.log(result);
// } else{
//     console.log("Invalid operations");
// }

//TASK 5
// let sum = 0;

// for(let i=1; i<=10; i++){
//     sum += i;
    
// }
// console.log(sum);

// TASK 6
// let givenNumber = 5;

// let factorial = 1;

// for(i = givenNumber; i>=1; i--){
//     factorial *= i;
// }
// console.log(factorial);

//TASK 7
// let givenNumber = 9;

// for(let i = 1; i<=10; i++){
//    let sum = givenNumber * i;
//     console.log(givenNumber + '*' + i + "=" +sum);
// }

// let givenNumber = 1;
// let count = 0;
// while(givenNumber <= 10){
//     count += 1
//     let sum = 5 
//     let res = sum * count;
//     console.log(`${sum} * ${count}  = ${res}`);
//     givenNumber ++;
// }

// for(let i=0; i<10; i++)    {
//     console.log("Hello World!")
//     }


// for(i=1; i<=10; i++){
//     console.log(i);
// }

// for(let i=10; i>=1; i--){
//     console.log(i);
// }

// let i = 0;
// while(i<=4){
//     console.log("Hello World!");
//     i++;
// }
// let i = 1;
// while(i<=10){
//     console.log(i);
//     i++;
// }    


// let i = 0;
// do{
//     console.log("Hello world");
//     i++;
// }while(i<5)
// let i = 1;
// do{
//     console.log(i)
//     i++;
// }while(i<=20);

// let i = 1;
// do{
//     console.log("I ahould be printing");
//     i++;
// }while(i<1);
// let i = 1;
// while(i<1){
//     console.log("I shoud not printed");
//     i++;
// }
// let age = 12;
// if(age > 18){
//     console.log("Your are eligble to vote!")
// }.
// 
// let salary = 80000;

// switch(salary){
//     case 10000:
//         console.log("You have very less salary");
//         break;

//     case 20000:
//         console.log("You have less salary");
//         break;

//     case 50000:
//         console.log("You have good salary");
//         break;

//     case 70000:
//         console.log("You have very good salary");
//         break;
// default:
//     console.log("Can't get your salary");
//     break;
// }

// let myArry = ["one", "two", "three", "four"];

// for(let i = 0; i < myArry.length; i++){
//     console.log(myArry[i]);
// }
// for(let item of myArry){
//     console.log(item);
// }
// let names = ["Ravi", "Rahul", "Karan"];

// console.log(names)
// let mixed = ["banana", 67, true];

// console.log(mixed)
// let fruits = ["mango", "banana", "grapes"];

// fruits.push("orange");

// console.log(fruits)
// fruits.pop();
// console.log(fruits);
// fruits.unshift("orange");
// console.log(fruits);
// fruits.shift();
// console.log(fruits);

//For Loop 
// let fruits = ["mango", "banana", "grapes", "orange"];

// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }
// for(let item of fruits){
//     console.log(item);
// }
// let a = 5;
// for(let i = 0; i<4; i++){
//     console.log(a)
// }
// let firstArray = [1, 2, 3, 4,5,6];
// let secondArray = [3, 4, 5, 6];

// let result = [];  
  
// for(let i = 0; i < firstArray.length; i++){
//    for(let j = 0; j < secondArray.length; j++){
//     if(firstArray[i] === secondArray[j]){
//         result.push(firstArray[i]);
        
//     }
//    } 
// }
// console.log(result)
//TASK -9
// let number = 17;

// let isPrime = true;

// if(number < 2){
//     isPrime = false;
// }else{
//     for(let i = 2; i <= Math.sqrt(number); i++){
//         if(number % i === 0){
//             isPrime = false;
//             break;
//         }
//     }
// }
// if(isPrime){
//     console.log(number + " is a prime number");
// }else{ 
//     console.log(number + " is not a prime number");
// }
//TASK -10
// let myArray = [1, 2, 3, 4, 5];

// let reversdArray = [];
// reversdArray = myArray.reverse();
// console.log(reversdArray);

//TASK -11

// let number = [10, 5, 20, 8, 15];
// let max = number[0];
// for(let i = 1; i < number.length; i++){
//     if(number[i] > max){
//         max = number[i];
//     }
// }
// console.log(max);
//Object
// let student = {
//     firstName:'Ram',
//     id: 23,
//     class : 10,
//     marks : [67 , 78, 56]
// }
// console.log(student);

// let car = {
//     brand : "Honda",
//     name : "Civic",
//     price : 2000000,
//     color : 'black',
//     engine : "petrol"
// }
// for(let item in car){
//     console.log(car[item]);
// }
// let student = {
//     name : "Ravi",
//     rollno : 13,
//     marks : [34, 68, 93, 54, 90],
//     isPassed : true,
// }
// console.log(student)
// for(let item in student){
//     console.log(item.marks)
// }
// let passedMarks = 35;
// for(let i = 0; i < student.marks.length; i++){
//     if(student.marks[i] > passedMarks){
//         console.log("Your exam are passed");
//     }else{
//         console.log("Your exam are faild")
//     }
// }

// console.log(student.marks[0])
//TASK -12
// const users = [
//     { id: 1, name: "A", age: 25 },
//     { id: 2, name: "B", age: 30 },
//     { id: 3, name: "C", age: 22 }
//   ];

// let userIdToUpdate = 4;
// let userAgeUpdate = 35;

//  for(i = 0; i < users.length; i++){
//     if(users[i].id === userIdToUpdate){
//         let result = users[i].age = userAgeUpdate;
//     console.log(result)
//     }else {
//         console.log("User with specified ID does not exist");
//     }
//   }

//Functions In JavaScript
//  function greet(){
//     console.log("Hello"); 
//  }
//  greet();
// function add(a, b){
//     console.log(a + b);
// }
// add(10, 20)

// add(45, 50);

// let greet = function(a, b){
//     console.log(a+b);
// }
// greet(40, 90);
// let multiply = function(a, b){
//     console.log(a*b)
// }
// multiply(2, 6);
// function add(a, b){
//     return a+b;
// }
// console.log(add(12, 13));
// let add = function(a, b){
//     console.log(a+b);
// }
// let add =(a, b) =>{
//     console.log(a+b);
// }
// add(12, 14);

// let greet = (name) =>{
//     console.log(`${name} Hello`);
// }
// greet("Karan");
// let area = (side) =>{
//     console.log(side * side);
// }
// area(4);
// area(16);
//TASK -13

// function firbonacciSeries(numTerms){
//     let num1 = 0;
//     let num2 = 1;
//     let fibSeries = [num1, num2];
//     for(let i=2; i < numTerms; i++){
//         let nextNum = num1 + num2;
//         fibSeries.push(nextNum);
//         num1 = num2;
//         num2 = nextNum;
//     }
//     return fibSeries;
// }

// const numTerms = 7;
// const result = firbonacciSeries(numTerms);
// console.log("Fibonacci Series:", result.join(','));
// TASK - 14

// function isPalindrome(str){
//     let start = 0;
//     let end = str.length -1;
//     while(start < end){
//         if(str[start] !== str[end]){
//             return false;
//         }
//         start++;
//         end--;
//     }
//     return true;

// }
// console.log(isPalindrome("noon"));

// var letter = 'a'; 

// letter = letter.toLowerCase();

// var vowels = ['a', 'e', 'i', 'o', 'u'];

// if (vowels.includes(letter)) {
//     console.log(letter + " is a vowel.");
// } else {
//     console.log(letter + " is a consonant.");
// }

//Ass -9;
// let letter = 'a';
// letter = letter.toLowerCase();
// let vowels = ['a', 'e', 'e', 'o', 'u'];
// if(vowels.includes(letter)){
// 	console.log(`${letter} + "is a vowel”`);
// }else{
// 	console.log(`${letter} + "is  a consonant”`)
// }
//ass -10
// let givenThreeNum = [8, 10, 23];
// let max = givenThreeNum[0];

// for(let i = 1; i < givenThreeNum.length; i++){
// 	if(givenThreeNum[i] > max){
// 		max = givenThreeNum[i];
//     }	
// }
// console.log(max);
// for (let i = 2; i <= 100; i += 2) {
//     console.log(i);
// }


// for(let i = 1; i <=100; i++){
//     if(i%2 === 0){
//         console.log(`${i} +"even number"`)
//     }else{
//         console.log(`${i} + "odd number" `)
//     }
// }

// function fibonacci(n) {
//     let fibSeq = [];
//     fibSeq[0] = 0;
//     fibSeq[1] = 1;
//     for (let i = 2; i < n; i++) {
//         fibSeq[i] = fibSeq[i - 1] + fibSeq[i - 2];
//     }
//     return fibSeq;
// }

// function printFibonacci(n) {
//     let fibSeq = fibonacci(n);
//     console.log("Fibonacci sequence upto", n, "terms:");
//     console.log(fibSeq.join(', '));
// }

// printFibonacci(10); 
// function sumOfDigits(number) {
//     let sum = 0;
//     while (number !== 0) {
//         sum += number % 10; // Add the last digit to sum
//         number = Math.floor(number / 10); // Remove the last digit
//     }
//     return sum;
// }

// // Example usage:
// console.log(sumOfDigits(123)); // Output: 6 (1 + 2 + 3 = 6)
// console.log(sumOfDigits(456)); // Output: 15 (4 + 5 + 6 = 15)

// let array = [1, 2, 3, 4, 5];
// array = array.reverse();
// console.log(array);

// function givenNumber(array){
//     let sum = 0;
//     for(let i =0; i<= array.length;  i++){
//         if(typeof array[i] === 'number'){
//             sum += array[i];
//         }
//     }
// 	return sum;
// }
// let number = [2, 3, 4, 5, 6];
// console.log(givenNumber(number));
// let n = 5; // Define the value of n
// let numbers = [];

// for (let i = n; i >= 1; i--) {
//     numbers.push(i);
// }

// console.log("First", n, "natural numbers in reverse order:");
// console.log(numbers.join(', '));
// let givenNumber = 5;
// let number = [];
// for(let i = givenNumber; i >= 1; i--){
//     number.push(i);
// }
// console.log(number.join(','));
// function reverseString(string){
//     let reversdStr = '';
//     for(let i = string.length -1; i >= 0; i--){
//         reversdStr += string[i];

//     }
//     return reversdStr;
// }

// let reversdStr = "Hello, world";
// console.log(reverseString(reversdStr));


//17.Write a JavaScript function to reverse a string?

// function reverseString(str){
//     let reversdStr = '';
//     for(let i = str.length -1; i >= 0; i--){
//         reversdStr += str[i];

//     }
//     return reversdStr;
// }
// let reversdStr = "Hello, world";
// console.log(reverseString(reversdStr));


// function reverseString(str){
//     return str.split('').reverse().join('');
// }
// let reversed = reverseString(`"hello , world"`);
// console.log(reversed);
//Q 19
// function countVowels(str) {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     str = str.toLowerCase();
//     let count = 0;
//     for (let char of str) {
//         if (vowels.includes(char)) {
//             count++;
//         }
//     }
//     return count;
// }

// const str = "Hello, World!";
// console.log(countVowels(str)); 



// letter = letter.toLowerCase();
// let sum = 0;
// let vowels = ['a', 'e', 'i', 'o', 'u'];
// if(vowels.includes(letter)){
//     sum += sum;
//     console.log(sum);




// function  isPalindrome(str){
// 	let start = 0;
// 	let end = str.length -1;
// 	while(start < end){
// 	if(str[start] !== str[end]){
// 		return false;
// 	}
// 	start ++;
// 	end --;

// }
// 	return true;

// }
// console.log(isPalindrome("noon")); 
// function printArrayWithIndices(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(`${arr[i]}`);
//     }
// }

// // Example usage:
// const array = [1, 4, 3, 2, 5];
// printArrayWithIndices(array);
// function sortArray(arr) {
//     const sortedArr = [];
//     while (arr.length > 0) {
//         const min = Math.min(...arr);
//         sortedArr.push(min);
//         arr.splice(arr.indexOf(min), 1);
//     }
//     return sortedArr;
// }

// const array2 = [5, 1, 3, 4, 2];
// const sortedArray = sortArray(array2);
// console.log(sortedArray); // Output: [1, 2, 3, 4, 5]

// function bubbleSort(arr) {
//     const len = arr.length;
//     for (let i = 0; i < len - 1; i++) {
//         for (let j = 0; j < len - 1 - i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 // Swap arr[j] and arr[j+1]
//                 const temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }

// const array2 = [5, 1, 3, 4, 2];
// const sortedArray = bubbleSort(array2);
// console.log(sortedArray);
// let everyThirdNum = 3;
// for(let i =1; i <= 100; i += everyThirdNum ){
// 	console.log(i);
// }

// const calculateArea = (side) =>{

//     let area = side*side;
//     return area;
// }
// const result = calculateArea(12);
// console.log(result);
// const reactangleArea = (length, breadth) =>{
//     let area = length*breadth;
//     return area;
// }
// const result = reactangleArea(12, 14);
// console.log(result);
// const areaCircle = (radius) =>{
//     const area = 22/7 * radius * radius;
//     return area
// }
// const  result = areaCircle(2.1);
// console.log(`Area of Circle is: ${result}`);

// const circumferenceCircle = (radius)=>{
//     let area = 2*22/7*radius;
//     return area;
// }
// const result = circumferenceCircle(2);
// console.log(result);
// const volumCuboib = (l,b,h) =>{
//     let volum = l*b*h;
//     return volum;
// }

// const result = volumCuboib(13,43,34);
// console.log(result)

// let sells = 85;
// let clothOfRupess = 8925;
// let profit = 15;
// let costPrise = 8925/85;

// const costPrice = (sellingprise, quantity, profit) =>{
//     const sellingpriseFor1meter =  sellingprise/quantity;
//     const costPrice = sellingpriseFor1meter - profit;
//     return costPrice;   
// }

// const result = costPrice(8925, 85, 15);
// console.log(result);

// const calculateAShare = (annualGain) =>{
//     const aInvestment = annualGain * 12/((1*12)+(2*6)+(3*4));
//     const aShare = aInvestment*1;
//     return aShare;

// }
// const result = calculateAShare(9000);
// console.log(`A share is ${result}`);

// const calculatePersentage = (sellingPrice, costPrice) =>{
//     const profitPersentage = ((sellingPrice - costPrice)/costPrice) * 100;
//     return profitPersentage;
// }
// const sellingPrice = 800;
// const costPrice = 100;

// const result = calculatePersentage(sellingPrice, costPrice);
// console.log(`make a loss ${result}`);

// const calculateReam = (puchasedReams,perReam, transportSpent, octroiPaid, coolie, gain) =>{

//     const paidOctroi = (puchasedReams*octroiPaid)/100;
//     const sum = (puchasedReams + perReam + transportSpent + paidOctroi + coolie );
//     const total = (sum*gain)/100;
//     const sellingPerReam = (sum + total)/puchasedReams;
//     return sellingPerReam;


// }
// const puchasedReams = 120;
// const perReam = 80;
// const transportSpent =  280;
// const octroiPaid = .40;
// const coolie = 72;
// const gain = 8;
// const result = calculateReam(puchasedReams, perReam, transportSpent, octroiPaid, coolie, gain);
// console.log(result);
// const calculatSpeed = (firstHalfSpeed, secondHalfSpeed) =>{
// let distance = 1;
// let time1 = 1/firstHalfSpeed;
// let time2 = 1/secondHalfSpeed;
// let speed = (distance + distance)/(time1+time2);
// return speed;
// }
// const result = calculatSpeed(40, 60);
// console.log(`The average speed is ${result.toFixed(1)} kmph`);

// let calculateDistance = (speed, time) =>{
//     let correctSpeed = speed * 18/5;
//     let distance = correctSpeed * time;
//     return distance;

// }
// const result = calculateDistance(12, 15/4);
// console.log(result)
// const isPrime = (number) =>{
//     if(number <2){
//         return false
//     }
//     for(let i = 2; i < number; i++){
//         if(number%i === 0){
//             return false;
//         }
//     }
//     return true;
// }
// const result = isPrime(3);
// if(result){
//     console.log("The number is prime");
// }else{
//     console.log("The number is not prime");
// }
// const genarateFeb = (number) =>{
//     let num1 = 0;
//     let num2 = 1;
//     let sum;
//     let fib = [];
//     for (i = 1; i < number; i++){
   
//         fib.push(num1);
//         sum = num1 + num2;
//         num1 = num2;
//         num2 = sum;
        
//     }
//     return fib;
// }

// const result = genarateFeb(100);
// console.log(result);


// Palindrome

// const isPalindrome = (input) =>{
//     const str = String(input);
//     for(let i = 0; i < str.length/2; i++){
//         if(str[i] !== str[str.length -1 - i]){
//             return false
//         }
//     }
//     return true;
// }
// const result = isPalindrome(12324);
// console.log(result);


//Reversed 
// const reverseFun= (input) =>{
//     const str = String(input);
//     let reverse = "";
//     for(let i = str.length - 1 ; i >= 0 ; i--){
//         reverse = reverse + str[i];
//     }
//     return reverse;
// }
// const result = reverseFun(1234);
// console.log(result);


//calculateFactorial

// const calculateFactorial = (number) =>{
//     if(number === 0 || number === 1){
//         return 1;
//     }
//     let result = 1
//     for(let  i = 1; i <= number; i++){
//         result = result * i;
//     }
//     return result;
// }
// const result = calculateFactorial(6);
// console.log(result)



// let word = string[0];

// let reverseWord = word.split().reverse().join();

// console.log(reverseWord)


// let string = "Hello world";

// let reversed = string.slice(0,5);
// let lastWord = string.slice(6, );

// let firstWord = reversed.split('').reverse().join('');
// console.log(`${firstWord}  ${lastWord}`);

// let n= "Hello world";
// let a = n.split(" ");
// let c= a[0];
// n = a[1];
// let b = [];
// for(let i=c.length-1; i>=0;i--){
//     b=b+c[i];
// }
// let d= b+" "+ n;
// console.log(d);

// function reverseFirstWord(sentsnce){
//     let word = sentsnce.split(" ");
//     if(word[0]){
//         word[0] = word[0].split('').reverse().join('');
//     }
//     return word.join(' ');
// }

// console.log(reverseFirstWord("Hello World"));

// function largestStr(n){
//     let largestStr =n.split(" ")
//     if(largestStr[0].length > largestStr[1].length && largestStr[0].length > largestStr[2].length){
//         let result = largestStr[0].split('').join('');
//         return result;
//     }else if(largestStr[2].length > largestStr[0].length && largestStr[2].length > largestStr[1].length){
//         let result = largestStr[2].split('').join('');
//         return result;
//     }
// }
    
// }
// function largestStr(n){
//     let str = n.split(" ");
//    for(let i = 0; i < str.length; i++){
//     let result = null;
//         if(str[0].length > str[1].length){
//             result = str[0];
            
//         }else if(str[1].length > str[2].length){
//             result = (str[1]);
//         }else{
//             result = (str[2]);
//         }
//         return result;
//     }
// }

// find the largest word
// function largestStr(n){
//     let str = n.split(" ");
//     let largestStr = "";
//     for(item of str){
//         if(item.length > largestStr.length){
//             largestStr = item;
//         }
//     }
//     return largestStr;
// }
// console.log(largestStr("javaScript is fun"));
// function largestItem(n){
//     let str = n.split(' ');
//     let largest ="";
//     for(item of str){
//         if(item.length > largest.length){
//             largest = item;
//         }
//     }
//     return largest;
// }
// console.log(largestItem("Hello worlds this"));
// const numbers = [45, 4, 9, 16, 25];

// let txt = "";
// for (let x in numbers) {
//   txt += numbers[x] ; 
//   console.log(txt)
// }

// function givenStr(str) {
//     let words = str.split(' ');
    
//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice('1');
//     }
//     let capitalizedString = words.join(' ');
//     return capitalizedString;
// }
// console.log(givenStr("javascript is fun"));

function sumOf(n){
    let 
}