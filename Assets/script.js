// User Input variables 

var button;

// Array of Special Characters 

var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];

// Array of Numeric Charaters 

var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of Lower Characters 

var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Array of Upper Characters 

var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

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

// Function to generate password 
function generatePassword() {
  
  // User input 

  button = prompt ("How many characters would you like? Choose between 8 and 128 characters");

  // If Else Statement to generate password 

  if (!button) {
  alert ("This must have a value!")
  }  else if (button < 8 || button > 128) {
    button = prompt ("You must choose between 8 and 128!");
  } else {

    specialCharacters = confirm("Will your password contain special characters?");
    numericCharacters = confirm("Will your password contain numbers?");
    lowerCasedCharacters = confirm("Will your password contain lower cased characters?");
    upperCasedCharacters = confirm("Will your password contain upper cased characters?");
  };

  // If Else statement for when user cancels all 

  if (!specialCharacters && !numericCharacters && !lowerCasedCharacters && !upperCasedCharacters) {
  alert ("You must choose a criteria"); 
  } 

}



// If else statements for the different options avaliable 

