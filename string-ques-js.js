//1: convert string into only one array
// let str =  "What meant to be will be";
// console.warn([str]);
// console.warn(str.split());

//2: convert string to array with each character
// let str = "What meant to be will be";
// console.warn([...str]);
// console.warn(str.split(''));

//3. convert string to array with space or any sequence
// let str = "What meant to be will be";
// console.warn(str.split('a'));

//4. replace any character
// let str = "What meant to be Will be";
// console.warn(str.replace(/W/g, 'z'));

//5. Get substring from string
// let str = "What meant to be will be";
// console.warn(str.substring(0, 6));

//6. Remove first character
// let str = "What meant to be will be";
// console.warn(str.substring(1, str.length));

//7. Remove last character
// console.warn(str.substring(0, str.length-1));

//8. Remove string before specific character
// let str = "What meant to be will be";
// let temp = str.split('w');
// console.warn(temp[0]);

//9. Remove extra space
let str = "                What meant to be will be                    ";
console.warn(str)
console.warn(str.trimStart());
console.warn(str.trimEnd());
console.warn(trim());