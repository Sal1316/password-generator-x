// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword); // Add event listener to generate button

// main function: overrides password to the #password input tag
function writePassword() {
  //variables: 
  var passLength = window.prompt(
    "Input a password length between 8-128 characters."
  );
  if(passLength === null) return; // exits when cancels.
    
  var charTypeUpper = window.confirm("Include UPPERCASE characters");
  var charTypeLower = window.confirm("Include lowercase characters");
  var charTypeNumeric = window.confirm("Include numeric( 0123... ) characters");
  var charTypeSpacial = window.confirm("Include special(!#$%&@'()*) characters"); 
  
  if (passLength < 8 || passLength > 128) {
    window.alert("Password length does not match the parameter. Try again.");
    return;
  } 
  if(charTypeUpper === false && charTypeLower === false && charTypeNumeric === false && charTypeSpacial === false) {
    window.alert("You must select at least one criteria for password. \n\nFor example, \nShould contain atleast one uppercase, lowercase, numeric, or special character.");
    return;
  }

  var password = generatePassword(passLength, charTypeUpper, charTypeLower, charTypeNumeric, charTypeSpacial); //calls password generator.
  var passwordText = document.querySelector("#password"); //indexes text area
  passwordText.value = password; // assignes value to text area.
}


// helper functions: 
function generatePassword(len, upper, lower, numeric, special) {
  var chars = passwordCriteriaBuilder(upper, lower, numeric, special); 
  var password = [];

  for (let i = 0; i < len; i++) {
    var randomChar = Math.floor(Math.random() * chars.length);
    password += chars[randomChar];
    console.log("The password is: " + password);
  }

  return password;
}

/* fx builds password based on how many character types to include, ex, Uppercase, lowercse, numbers, orspecial chars.*/
function passwordCriteriaBuilder(upper, lower, numbers, special) { 
  var combinedString = '';

  if(upper) combinedString += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if(lower) combinedString += 'abcdefghijklmnopqrstuvwxyz';
  if(numbers) combinedString += '0123456789';
  if(special) combinedString += ` !#$%&@'()*`; // special chars not included: +,-./:;<=>?[\]^_{|}~
  
  return combinedString;// returns a combined password of all the user type selections
}


