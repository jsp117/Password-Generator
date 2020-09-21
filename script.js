// Assignment Code
const generateBtn = document.querySelector("#generate");
const lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const spec = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "?", ".", "<", ">"];
var container = [];
var lowerCase = false;
var upperCase = false;
var numbers = false;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// function starts on click
function writePassword() {

    // clears array before use
    container.length = 0;
    // firstPass.length = 0;

    var characters = prompt("How many characters would you like? (between 8 and 128)");
    // return if number outside range or null
    if (characters < 8 || characters > 128 || characters === null || isNaN(characters)) {
        // return = last statement that executes in function
        return alert("You must input a number between 8 and 128.");
    }
    var lowerCase = confirm("Do you want lowercase letters?");
    var upperCase = confirm("Do you want uppercase letters?");
    var numbers = confirm("Do you want numbers?");
    var special = confirm("Do you want special characters?");

    if (lowerCase === false && upperCase === false && numbers === false && special === false) {
        return alert("You must select at least one character type");
    }
    // add criteria arrays to container
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

    // call function with length of characters - returns array of random characters from container
    const finalPass = createPassword(characters);

    // if a criteria is selected, create for loop to add 4 random characters from each character type to finalPass
    if (lowerCase) {
        finalPass[0] = addOne(lower);
        // console.log("one lower: " + finalPass);
    }
    if (upperCase) {
        finalPass[1] = addOne(upper);
        // console.log("one upper: " + finalPass);
    }
    if (numbers) {
        finalPass[2] = addOne(num);
        // console.log("one number: " + finalPass);
    }
    if (special) {
        finalPass[3] = addOne(spec);
        // console.log("one special: " + finalPass);
    }

    // shuffle finalPass array
    // console.log("before shuffle: " + finalPass);
    for (let i = 0; i < finalPass.length; i++) {
        var x = Math.floor(Math.random() * i);
        var y = finalPass[i];
        // console.log("variable stored = " + y);
        finalPass[i] = finalPass[x];
        // console.log("first swap = " + finalPass[i]);
        finalPass[x] = y;
        // console.log("second swap = " + finalPass[x]);
        // console.log("password after swaps = " + finalPass);
    }
    // console.log("after shuffle: " + finalPass);

    // new variable to hold finalpass array and remove commas
    const pass = finalPass.join("");
    document.getElementById("password").value = pass;
}


// function with the length of characters
function createPassword(char) {
    const pass = [];
    // length = characters
    // generates random number between 1 and container length and adds the index of that number to pass array
    for (var i = 0; i < char; i++) {
        //   grabs random character out of container
        var x = Math.floor(Math.random() * container.length);
        //   at the end of pass put random character
        pass.push(container[x]);
        // console.log(firstPass);
    }
    // returns pass from this function
    return pass;
}

// function to add one letter of each character type
function addOne(array){
    var oneOfEach = 0;
        //   grabs random character out of array
        var x = Math.floor(Math.random() * array.length);
    // set variable to random character value
    oneOfEach = array[x];
    // console.log(oneOfEach);
    return oneOfEach;
}

