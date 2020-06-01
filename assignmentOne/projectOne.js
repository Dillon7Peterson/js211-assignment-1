//Write a JavaScript program to display the current day and time.
let myDay = Date();
console.log('today is', myDay);

//Write a JavaScript program to convert a number to a string.
let myArray = [1, 2, 3, 4];
console.log('here is my array', (myArray));


//Write a JavaScript program to convert a string to the number.
let num2 = '3456';
console.log(parseInt(num2));


//Write a JavaScript program that takes in different datatypes and prints out whether they are a:

//Boolean
let aliensAreReal = true;
console.log(typeof (aliensAreReal));

//Null
let myTime = null;
console.log(typeof(myTime));



//Undefined
let relationshipStatus;
console.log(typeof(relationshipStatus));

//Number
let demoNum = 327;
console.log(typeof(demoNum));

//NaN
let num3 = 123;
console.log(parseInt('num3'));

//String
let favoriteSong = 'anything by Celine Dion';
console.log(typeof(favoriteSong));

//Write a JavaScript program that adds 2 numbers together.
let x = 10;
let y = 12;
let z = x + y;

console.log(z);

//Write a JavaScript program that runs only when 2 things are true.
let skyColor = 'blue';
let cloudColor = 'white';

if (skyColor === 'blue' && cloudColor === 'white') {
 console.log('this is TRUE');
}

//Write a JavaScript program that runs when 1 of 2 things are true.
let valueA = 0;
let valueB = 15;

if (valueA === 0 || valueB === 0) {
  console.log('half TRUE')
}

//Write a JavaScript program that runs when both things are not true.
if (valueA === 15 && valueB === 0) {
  console.log('true')
} else {
  console.log('FALSIFIED');
}