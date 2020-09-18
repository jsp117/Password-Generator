// Assignment Code
var generateBtn = document.querySelector("#generate");
const lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const spec = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "?", ".", "<", ">"];
characters;
lowerCase;
upperCase;
numbers;
special;


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function generatePassword() {

    characters = prompt("How many characters would you like? (between 8 and 128)");

    do {
        lowerCase = confirm("Do you want lowercase letters?");
        if(lowerCase){

        }
        upperCase = confirm("Do you want uppercase letters?");
        if(upperCase){

        }
        numbers = confirm("Do you want numbers?");
        if(numbers){

        }
        special = confirm("Do you want special characters?");
        if(special){

        }


    } while (char > 8 && char < 128);

}