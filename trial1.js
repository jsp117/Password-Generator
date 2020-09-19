// test
function generatePassword() {

}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// event listener to start password generation
generateBtn.addEventListener("click", generateNew);


// initialize variables

var start = true;
var length;
var lowerCase;
var upperCase;
var numbers = true;
var special;
var selector = 0;
var start = false;
var div = 0;
//When user clicks generate password - Prompt user for criteria
function generateNew() {
 


  // prompt for length between 8 and 128 characters
  length = prompt("How many characters would you like your password to be? (Must be between 8-128 characters");
  console.log("inside function " + length);
  // Boolean Confirm for lowercase
  // lowerCase = confirm("Would you like lowercase letters?");
  // console.log(lowerCase);
  // // Boolean Confirm for uppercase
  // upperCase = confirm("Would you like uppercase letters?");

  // // Boolean Confirm for Numeric
  // numbers = confirm("Would you like numbers?");
  // // Boolean Confirm for Special Characters
  // special = confirm("Would you like special characters?");
  numbers = true;
}
while(numbers){
console.log("length = "+ length);
numbers = false;
}

  // if (length < 8 || length > 128) {
  //   start = false;
  //   alert("You must choose a number between 8 and 128!");
  // } else if (lowerCase) {
  //   selector + 1;
  // } else if (upperCase) {
  //   selector + 1;
  // } else if (numbers) {
  //   selector + 1;
  // } else if (special) {
  //   selector + 1;
  // } else if (lowerCase === false && upperCase === false && numbers === false && special === false) {
  //   alert("You must choose at least one character type!");
  //   start = false;
  // } else {
  //   start = true;
  // }

  // div = Math.floor(length / selector);
  // console.log("div= " + div);

  // var container = {
  //   lower: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  //   upper: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  //   num: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  //   special: ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "?", ".", "<", ">"],
  // }


  // var a = [];
  // var b = [];
  // var c = [];
  // var d = [];

  // for (i = 0; i < div; i++) {
  //   a.push(Math.floor(Math.random() * 10 + 1));
  //   console.log(a[i]);
  // }
  // console.log(a);

// while (start) {

//   if (lowerCase) {

//   } else if (upperCase) {

//   } else if (numbers) {
//     for (i = 0; i < div; i++) {
//       a.unshift(Math.floor(Math.random() * 10 + 1));
//       console.log(a);
//     }
//   } else if (special) {

//   }

// }







/*
// Start

// Prompt for Length between 8 and 128 characters
while(generateNew){
var length = prompt("How many characters would you like your password to be?");
// Boolean Confirm for lowercase
var lowerCase = confirm("Would you like lowercase letters?");
// Boolean Confirm for uppercase
var upperCase = confirm("Would you like uppercase letters?");
// Boolean Confirm for Numeric
var numbers = confirm("Would you like numbers?");
// Boolean Confirm for Special Characters
var special = confirm("Would you like special characters?");
// Create object to hold arrays

}
*/