// Assignment Code
var generateBtn = document.querySelector("#generate");
// 

function writePassword() {
    var start = true;
    var characters = prompt("How many characters would you like? (between 8 and 128)");
    var lowerCase = confirm("Do you want lowercase letters?");
    var upperCase = confirm("Do you want uppercase letters?");
    var numbers = confirm("Do you want numbers?");
    var special = confirm("Do you want special characters?");
    if(characters < 8 || characters > 128){
        alert("You must select between 8 and 128 characters.");
        start = false;
        
    }else if(lowerCase && upperCase && numbers && special){
        alert("You must select at least one character type");
        start = false;
    }
     else {
         while(start){
// Call function to get lowercase variables

// Call function to get uppercase variables

// Call function to get numbers

// Call function to get special characters

// Call function to mix array of taken characters

         }


}
// Write password to the #password input
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
















// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
