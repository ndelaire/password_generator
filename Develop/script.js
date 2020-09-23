///////////////////////////////////////////////////////////////////////
// PASSWORD GENERATOR
//
// * For this assignment, you will not be changing the HTML and CSS at all.
//
// * You will need a generatePassword function is called when the user
//   clicks the Generate Password button.
//
// * You can create other functions that are called from within
//   generatePassword
//
// * Gather user input with prompt's and confirm's

// * Arrays used for password generator 
var lowercaseArr = ["a","b", "c","d", "e", "f", "g", "h", "i", "j", "m","l", "n", "o", "p", "q", "r", "s", "t","u", "v","w","x", "y,", "z"]
var uppercaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbersArr = [0,1,2,3,4,5,6,7,8,9]
var specialCharArr = ["@", "!", "%", "^", "#", "&", "*", "(", ")", "?", "!"]


function generatePassword() {
  

  var length = parseInt(prompt("How many characters will your password be? Enter a number between 8 and 128"));

  if (length >= 8 && length <= 128) {
    alert("Your password will be " + length + " characters"); 
  }
  else {
    alert("Your password needs to be between 8 and 128 characters");
    return; 
  }

  var uppercase = confirm("Would you like uppercase letters?")
  var lowercase = confirm("Would you like lowercase letters?")
  var numbers = confirm("Would you like numbers?")
  var specialChar = confirm("Would you like special characters?")

  if (uppercase === false && lowercase === false && numbers === false && specialChar ===false ){
    alert("You must choose an uppercase, lowercase, number and special character")
    return;
  }

   var passwordOptions = []; 
   var results = [];
   var insuranceChar = [];

   if (uppercase === true) {
     passwordOptions = passwordOptions.concat(uppercaseArr);
     insuranceChar.push(uppercaseArr[Math.floor(Math.random() * uppercaseArr.length)])
   }
   if (lowercase === true) {
    passwordOptions = passwordOptions.concat(lowercaseArr);
    insuranceChar.push(lowercaseArr[Math.floor(Math.random() * lowercaseArr.length)])
  }
  if (numbers === true) {
    passwordOptions = passwordOptions.concat(numbersArr);
    insuranceChar.push(numbersArr[Math.floor(Math.random() * numbersArr.length)])
  }
  if (specialChar === true) {
    passwordOptions = passwordOptions.concat(specialCharArr);
    insuranceChar.push(specialCharArr[Math.floor(Math.random() * specialCharArr.length)])
  }

  var item = passwordOptions[Math.floor(Math.random() * passwordOptions.length)];
  for (var i = 0; i<length; i ++){
    results.push(passwordOptions[Math.floor(Math.random() * passwordOptions.length)])
  }
  for (var i = 0; i<insuranceChar.length; i ++){
    results[i] = insuranceChar[i]
  }

  return results.join("");
}



///////////////////////////////////////////////////////////////////////
// DO NOT TOUCH THIS CODE
//
// This code handles:
// * clicking the Generate Password
// * writing the password to the screen
//

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//////////////////////////////////////////////////////////////////////
