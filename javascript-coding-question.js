// const prompt = require("prompt-sync")();

//Question-6: How to find missing element in an array 1 to 10-----------
// let arr = [1, 2, 3, 4, 5, 6, 9, 10];
// let missingElements = [];
// const missingValue = (arr) => {
//     const minVal = Math.min(...arr);
//     const maxVal = Math.max(...arr);

//     for(let i=minVal; i<maxVal; i++){
//         if(arr.indexOf(i)<0){
//             missingElements.push(i);
//         }
//     }
//     return (missingElements);
// }
// console.log(missingValue(arr));


//Question-7: How to find even and odd in a given array.
//----------Solution-1--------
// let arr = [3, 4, 7, 8, 9, 10, 34, 33, 91];
// let evenArr = [];
// let oddArr = [];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         evenArr.push(arr[i]);
//     }else{
//         oddArr.push(arr[i]);
//     }
// }
// console.log(evenArr);
// console.log(oddArr);

//--------solution-2----------
// let arr = [3, 4, 7, 8, 9, 10, 34, 33, 91];
// const even = arr.filter((item)=>{
//     return item%2===0;
// })
// const odd = arr.filter((item)=>{
//     return item%2==!0;
// })
// console.log(even);
// console.log(odd);

//Question-7: Sum of all elements in an array
// const arr = [3,4,6,7,8,9,10];
// const sumage = (arr) =>{
//     return arr.reduce((prev, current)=>{
//         return prev+current;
//     })
// }

// console.log(sumage(arr));

//Question-8: Factorial of a given number

// const inputVal = prompt("Enter a number");
// let fact = 1;
// if(inputVal < 0){
//     console.log(`Factorial of a given number - ${inputVal} is not possible...`);
// }else{
//     for(let i=1;i<inputVal;i++){
//         fact=fact*i;
//     }
// }
// console.log(`Factorial of a given input number ${inputVal} is ${fact}`);

//Question-9: Prime number in JS
//Solution-1---------------
// let num = 6;
// let count = 0;
// for(let i=1;i<=num;i++){
//     if(num%i==0){
//         count=count+1;    
//     }
// }
// if(count==2){
//     console.log(`${num} is a prime number!`)
// }else{
//     console.log(`${num} is not a prime number!`);
// }

//Solutin-2----------------
// let number = 9;
// if(number == 1){
//     console.log(`${number} is nor prime neither composite`);
// }else if(number < 0){
//     console.log(`Prime number of ${number} is not possible`);
// }else{
//     for(let i=2;i<number;i++){
//         if(number % i==0){
//             var result= `${number} is not a prime number`
//             break;
//         }else{
//             var result = `${number} is prime number`;
//         }
//     }
//     console.log(result)
// }

//Question-10: Find vowels from string
//Solution1--------
// let str = "iooh";
// str = str.toLocaleLowerCase();
// if(str=='a'||str=='e'||str=='i'||str=='o'||str=='u'){
//     console.log(`String ${str} is vowel`);
// }else{
//     console.log(`string ${str} is not a vowel`);
// }

//Solution-2: count number of vowels in a string.
// let string = "Hello, I'm Arpita Prajpati";
// let vowels = ['a', 'e', 'i','o', 'u'];

// const numberOfVowels = (str)=>{
//     var count = 0;
//     for(let letter of str.toLocaleLowerCase()){       
//         if(vowels.includes(letter)){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(numberOfVowels(string));


//Question-11: Reverse a string in JS
// let str = "hello world";
// const reverseString = (str) => {
//     var strArr = str.split("");
//     var reverseArr = strArr.reverse();
//     var joinArr = reverseArr.join("");

//     return joinArr
// }
// console.log(reverseString(str));

//Question-12: Find palindrome
// var str ="madam";
// str = str.toLocaleLowerCase();
// const palindromeStr=(str)=>{
//     var result = str.split('').reverse().join('');
//     if(result === str){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(palindromeStr(str));

//Question-13: Swap two variables without using the third
//Solution-1
// const getSwappedValues = (a, b)=>{
//     const x = (a+b)-a;
//     const y = (a+b)-b;
//     console.log(`swapped values are: a = ${x} and b = ${y}`);
// }
// var num1 = 34;
// var num2 = 78;
// getSwappedValues(num1, num2);

//Solution-2
// var num1 =45;
// var num2 =34;
// [num1, num2] = [num2, num1];
// console.log(`Swapped values of num1 and num2 are: ${num1} and ${num2}`)

//Question-14: Merge array in JS
// //Solution-1
// let arr1 = [4, 5, 7, 9, 19];
// let arr2 = [7, 33, 12, 90];

// const finalArr = arr1.concat(arr2)
// const sortedArr = finalArr.sort((a, b)=>{
//     return a-b;
// });
// console.log(sortedArr);

// Solution-2
// let arr1 = [4, 5, 7, 9, 19];
// let arr2 = [7, 33, 12, 90];
// const mergeArrays = (arr1, arr2)=>{
//     return [...arr1, ...arr2]
// }
// console.log(mergeArrays(arr1, arr2));

//Question-15: Factor of a given
// var number = 18;
// var factorOfNum = [];
// for(let i=0;i<=number;i++){
//     if(number%i===0){
//         factorOfNum.push(i);
//     }
// }
// console.log(factorOfNum);

//Question-16: Simple calculator
// const prompt = require("prompt-sync")();
// const operator = prompt("Select operator: +, -, / or *");

// const num1 = parseFloat(prompt("Enter num 1: "));
// const num2 = parseFloat(prompt("Enter num 2: "));

// if(operator == '+'){
//     result = num1+num2;
// }
// else if(operator == '-'){
//     result = num1-num2;
// }
// else if(operator == '*'){
//     result = num1*num2;
// }
// else{
//     result = num1/num2;
// }
// console.log(`${num1} ${operator} ${num2} = ${result}`)

//Question-17: Intersection of two arrays
//Solution-1
// var arr1 = [2, 9, 6, 1, 4];
// var arr2 = [8, 3, 6, 9, 2];

// var intersectionArr = [];
// for(let i=0;i<arr1.length;i++){
//     for(let j=0;j<arr2.length;j++){
//         if(arr1[i]==arr2[j]){
//             intersectionArr.push(arr1[i]);
//         }
//     }
// }
// console.log(intersectionArr);

//Solution-2
// var arr1 = [2, 9, 6, 1, 4, 9, 6];
// var arr2 = [8, 3, 6, 9, 2];

// const intersectionArr = arr1.filter((element)=>{
//     return arr2.includes(element)       
// })
// // const uniqueEle = new Set(intersectionArr);
// // console.log([...uniqueEle]);
// console.log([...new Set(intersectionArr)])


//Question-18: Union of two arrays
// var arr1 = [2, 9, 6, 1, 4];
// var arr2 = [8, 3, 6, 9, 2];

// var unionArr = [...arr1, ...arr2];
// console.log([...new Set(unionArr)])

//Question-19: Convert Celsius to Fahrenheit
// var celsius = 34;
// var fahrenheit = celsius * (9/5) +32;
// console.log(`${fahrenheit}\u00B0 F`);

// var inputFahren = 98;
// var celsiusVal=5/9*(inputFahren-32);
// console.log(`${celsiusVal.toFixed("2")}\u00B0 C`)

//Question-21: convert kilometer into miles
// let userInput = 4;
// const factor = 0.621371;
// let miles = userInput * factor;
// console.log(miles);

//Question-22: Convert first letter of string in uppercase
// let str = "what meant to be will be!";
// const firstLetterUpperCase = (str) => {
//     var newStr = str.split(" ");     
//     var newArr = newStr.map((value)=>{
//         return value.charAt(0).toUpperCase() + value.slice(1);
//     }) 
//     return newArr.join(" ");
// }
// console.log(firstLetterUpperCase(str));

//Question-23: Fibonacci sequence 
// var a =-1;
// var b=1;
// n=10;
// for(let i=0;i<n;i++){
//     var c = a+b;
//     console.log(c);
//     a=b;
//     b=c;
//     console.log(c);
// }

//Question-24: Print Star Pattern
//Pattern-1: Right Angled Triangle
// for(let i=0;i<6;i++){
//     for(let j=0;j<i;j++){
//        document.write("*");        
//     }
//     document.write("<br>"); 
// }

//Question-25: check number of occurence of character in string

//no. of characters in string
// let string = "what meant to be will be";
// let count = 0;
// const noOfChar = (str) =>{
//     for(let letter of str){
//         if(letter === " "){
//             continue;
//         }else{
//             count++;
//         }
//     }
//     return count;
// }
// console.log(noOfChar(string));

//number of occurrence of a character in string

//Solution-1
// const prompt = require("prompt-sync")();
// var string = prompt("Enter  the string: ");
// var letter = prompt("Enter the letter to be count in a string: ");
// var count = 0;

// const countLetter = (str) => {
//     for(let lett of str){
//         if(lett == letter){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countLetter(string, letter));

// //Solution-2
// const prompt = require("prompt-sync")();
// var string = prompt("Enter  the string: ");
// var letter = prompt("Enter the letter to be count in a string: ");
// var count = 0;
// var strLen = string.length;

// for(let i=0;i<strLen;i++){
//     if(string[i] == letter){
//         count++;
//     }
// }
// console.log(`count of ${letter} in a given string '${string}' is ${count}`);

//Question-26: Print table of any user defined number using function
// const prompt= require("prompt-sync")();
// const printTable = (num) => {
//     for(let i=1;i<=10;i++){
//         console.log(`${num} x ${i} = ${num*i}`);
//     }
// }
// let num = prompt("Enter a number\n");
// printTable(num);

//Question-27: Program to check Armstrong number
// const prompt = require("prompt-sync")();
// let num = prompt("Enter a number\n");
// var temp = num;
// var lengthOfString = num.toString().length;
// var sum=0;
// const armstrongNum = (temp) => {
//     while(temp>0){
//         var digit = temp%10;
//         sum += digit**lengthOfString;
//         temp=parseInt(temp/10);
//        }
//        console.log(num);
//        if(sum==num){
//         return true;
//        }else{
//         return false;
//     }
// }
// console.log(armstrongNum(temp));

//Q. Difference between map method and forEach method
// const arrNum = [1, 2, 3, 4, 5];
// const mapMethod = arrNum.map((res)=>{
//     return res+4;
// })
// const forEachMethod = arrNum.forEach((res, i)=>{
//    arrNum[i] = res+7;
// })
// console.log(mapMethod, arrNum);

//Question. 28 : Cut Array length
// let data = [ 2, 4, 3, 6, 1, 9, 7];
// data.length = 3;
// console.warn(data);

//Question.29 Comma Operator
// let x =10;
// x = (x++, --x, x++, x--, x);
// console.warn(x);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//check the key and delete it and return true;
// function getPropertyValue(student) {
//     let hasProperty = student.hasOwnProperty("name");
//     console.log(hasProperty)
//     if (hasProperty) {
//         delete student.name;
//         // console.log(student)
//         return true;
//     } else {
//         return false;
//     }
// }
// let student = {
//     id: 123,
//     name: "Arpita",
//     phone: 238947
// }
// console.log(getPropertyValue(student))

let num = 0;
let temp = num;
let sum=0;
while(temp>0){
    var r = temp%10;
    sum=sum+r;
    temp=parseInt(temp/10);
}
console.log(sum);

console.warn(sum.toString().length)
let numLen = sum.toString().length;
var sum2=0;
if(numLen>=1){
    while(sum>0){
        var x=sum%10;
        var sum2=sum2+x;
        sum=parseInt(sum/10);
    }
}
console.log(sum2)