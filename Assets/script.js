// User Input variables 

var button;

// Array's of Characters 

var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];

var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordNode = document.querySelector("#password");

  passwordNode.value = password;

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

    var isSpecial = confirm("Will your password contain special characters?");
    var isNumeric = confirm("Will your password contain numbers?");
    var isLower = confirm("Will your password contain lower cased characters?");
    var isUpper = confirm("Will your password contain upper cased characters?");
  };

  // If Else statement for when user cancels all 

  if (!isSpecial && !isNumeric && !isLower && !isUpper) {
  passwordText = alert ("You must choose a criteria"); 
  } 
 
  // If Else statement for all options selected 

  else if (isSpecial && isNumeric && isLower && isUpper) {
    
    passwordText = specialCharacters.concat(numericCharacters, lowerCasedCharacters, upperCasedCharacters);

   // If Else statement for all other options that are avaliable 

  } else if (isSpecial && isNumeric && isLower) {

   passwordText = specialCharacters.concat(numericCharacters, lowerCasedCharacters);

  } else if (isSpecial && isNumeric && isUpper) {

    passwordText = specialCharacters.concat(numericCharacters, upperCasedCharacters);

  } else if (isNumeric && isLower && isUpper) {

    passwordText = numericCharacters.concat(lowerCasedCharacters, upperCasedCharacters);

  } else if (isSpecial && isNumeric) {

    passwordText = specialCharacters.concat(numericCharacters)

  } else if (isSpecial && isLower) {

    passwordText = specialCharacters.concat(lowerCasedCharacters)

  } else if (isSpecial && isUpper) {
    
    passwordText = specialCharacters.concat(upperCasedCharacters)

  } else if (isLower && isNumeric) {

    passwordText = lowerCasedCharacters.concat(numericCharacters)

  } else if (isLower && isUpper) {

    passwordText = lowerCasedCharacters.concat(upperCasedCharacters)

  } else if (isNumeric && isUpper) {

    passwordText = numericCharacters.concat(upperCasedCharacters)

  } else if (isSpecial) {

    passwordText = specialCharacters

  } else if (isNumeric) {

    passwordText = numericCharacters

  } else if (isLower) {

    passwordText = lowerCasedCharacters

  } else if (isUpper) {

    passwordText = upperCasedCharacters

  }

  var password = [ ];  
  // Random generation for password 
  for ( var i = 0; i < button; i++) {
    var random = passwordText[Math.floor(Math.random() * passwordText.length)];
    password.push(random);
  } 
  return password.join('');

}





