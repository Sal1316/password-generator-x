


// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword(6); //calls password generator.
  var passwordText = document.querySelector("#password"); //indexes text area
  passwordText.value = password; // assignes value to text area.
}

function generatePassword(len) {
  var chars = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz !#$%&@'()*` // not included +,-./:;<=>?[\]^_{|}~
  var cannotContain = '+,-./:;<=>?[\]^_{|}~';
  var passLength = len;
  var password = [];

  for (let i = 0; i < passLength; i++) {
    var randomChar = Math.floor(Math.random()*chars.length);
    password += chars[randomChar];
  }

  console.log('The password is: '+ password);
  return password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


