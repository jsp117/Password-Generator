// Assignment Code
const generateBtn = document.querySelector("#generate");
const lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const spec = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "?", ".", "<", ">"];
var container = [];
var firstPass = [];
var lowerCase = false;
var upperCase = false;
var numbers = false;




// function starts on click
function writePassword() {



    var characters = prompt("How many characters would you like? (between 8 and 128)");
    // restart if number outside range or null
    if (characters < 8 || characters > 128 || characters === null) {
        // last statement that executes in function
        return alert("You must select between 8 and 128 characters.");
    }
    var lowerCase = confirm("Do you want lowercase letters?");
    var upperCase = confirm("Do you want uppercase letters?");
    var numbers = confirm("Do you want numbers?");
    var special = confirm("Do you want special characters?");

    if (lowerCase === false && upperCase === false && numbers === false && special === false) {
        return alert("You must select at least one character type");

    }

    if (lowerCase) {
        // ... takes whatevers inside the array
        container.push(...lower);
        // console.log(container);
    }
    if (upperCase) {
        container.push(...upper);
        console.log(container);
    }
    if (numbers) {
        container.push(...num);
        // console.log(container);
    }
    if (special) {
        container.push(...spec);
        // console.log(container);
    }
    // while (start) {
    // call function with all criteria with length of characters
    createPassword(characters);
    start = false;

    // start = false;
    // Call function to get lowercase variables

    // Call function to get uppercase variables

    // Call function to get numbers

    // Call function to get special characters

    // Call function to mix array of taken characters

    // remove commas from array





    // console.log(firstPass);
    firstPass = firstPass.join("");
    document.getElementById("password").value = firstPass;
}

function createPassword(length) {
    // add criteria arrays to container

    // var container = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "?", ".", "<", ">"]
    // lower: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    // upper: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    // num: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    // special: ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "?", ".", "<", ">"],

    // add random characters from container to firstPass array
    for (var i = 0; i < length; i++) {
        //   grabs random character out of container
        var x = Math.floor(Math.random() * container.length);
        //   at the end of pass put random character
        firstPass.push(container[x]);
        // console.log(firstPass);
    }
}




// Write password to the #password input
// var password = generatePassword();
// var passwordText = document.querySelector("#password");

// passwordText.value = password;














// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
