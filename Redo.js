// Assignment Code
const generateBtn = document.querySelector("#generate");
const lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const spec = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "?", ".", "<", ">"];
var container = [];
// var firstPass = [];
var lowerCase = false;
var upperCase = false;
var numbers = false;




// function starts on click
function writePassword() {

    // clears array before use
    container.length = 0;
    // firstPass.length = 0;

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
        // ... takes whatevers inside the array instead of adding a new array
        container.push(...lower);
        // console.log(container);
    }
    if (upperCase) {
        container.push(...upper);
        // console.log(container);
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
    console.log(container);
    const finalPass = createPassword(characters);


    // create for loop to add 4 random characters from each character type to finalPass
    if (lowerCase) {
        for (let i = 0; i < lower.length; i++) {
            //   grabs random character out of lower array
            var x = Math.floor(Math.random() * lower.length);
        }
        // at finalPass index 1 add a random lowercase character
        finalPass[1] = lower[x];
    }
    // console.log(finalPass[1]);
    if (upperCase) {
        for (let i = 0; i < upper.length; i++) {
            //   grabs random character out of container
            var x = Math.floor(Math.random() * upper.length);
        }
        finalPass[2] = upper[x];
        // console.log(firstPass);
    }
    if (numbers) {
        for (let i = 0; i < num.length; i++) {
            //   grabs random character out of container
            var x = Math.floor(Math.random() * num.length);
        }
        finalPass[3] = num[x];
        // console.log(firstPass);
    }
    if (special) {
        for (let i = 0; i < spec.length; i++) {
            //   grabs random character out of container
            var x = Math.floor(Math.random() * spec.length);
        }
        finalPass[4] = spec[x];

    }
    // console.log(firstPass);

    // test for each character type - go through every index of finalPass and run this function on it - each character of finalPass
    // if(lowerCase){
    //     var found = finalPass.some(function(letter){
    //         // returns -1 if not in the array, otherwise it will return the number of the index in the array where letter is
    //         return lower.indexOf(letter) >= 0;
    //     })
    //     if(lowerCase != found){

    //     }
    // }
    // console.log(found);
    // if(upperCase){

    // }
    // if(numbers){

    // }
    // if(special){

    // }



    // new variable to hold finalpass array and remove commas
    const pass = finalPass.join("");
    document.getElementById("password").value = pass;
}

function createPassword(length) {

    const pass = [];
    // add criteria arrays to container

    // var container = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "?", ".", "<", ">"]
    // lower: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    // upper: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    // num: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    // special: ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "?", ".", "<", ">"],

    // generates random number between 1 and container length and adds the index of that number to pass array
    for (var i = 0; i < length; i++) {
        //   grabs random character out of container
        var x = Math.floor(Math.random() * container.length);
        //   at the end of pass put random character
        pass.push(container[x]);
        // console.log(firstPass);
    }
    // returns pass from this function
    return pass;
}



// Write password to the #password input
// var password = generatePassword();
// var passwordText = document.querySelector("#password");

// passwordText.value = password;














// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
