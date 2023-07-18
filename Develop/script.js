// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword); // Add event listener to generate button

// function overrides password to the #password input tag
function writePassword() {
  //variables: 
  var passLength = window.prompt(
    "Input a password length between 8-128 characters."
  );
  if(passLength === null) return; // exits when cancels.
    
  var charTypeUpper = window.confirm("Include UPPERCASE characters");
  var charTypeLower = window.confirm("Include lowercase characters");
  var charTypeNumeric = window.confirm("Include numeric( 0123... ) characters");
  var charTypeSpacial = window.confirm(
    "Include special( !#$%&@'()* ) characters"
    ); 
    
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


// FUNCTIONS: 
function generatePassword(len, upper, lower, numeric, special) {
  // second argument , chars is manual right now.
  var chars = passwordCriteriaBuilder(upper, lower, numeric, special); // not included +,-./:;<=>?[\]^_{|}~
  var password = [];

  for (let i = 0; i < len; i++) {
    var randomChar = Math.floor(Math.random() * chars.length);
    password += chars[randomChar];
    console.log("The password is: " + password);
  }

  return password;
}

/* build password based on how many characters types to include, ex, Uppercase, lowercse, numbes, special chars.*/
function passwordCriteriaBuilder(upper, lower, numbers, special) { 
  var combinesString = '';

  if(upper) combinesString += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if(lower) combinesString += 'abcdefghijklmnopqrstuvwxyz';
  if(numbers) combinesString += '0123456789';
  if(special) combinesString += ` !#$%&@'()*`;
  
    // returna a combined password of all the user type selections
  return combinesString;
}

// Testing: 
console.log("Password with just Uppercase: " + passwordCriteriaBuilder(true) )
console.log("Uppercase + Lowercase: "+ passwordCriteriaBuilder(true, true))
console.log("Uppercase + Lowercase + numbers: " + passwordCriteriaBuilder(true, true, true))
console.log("Uppercase + Lowercase + numbers + special characters: " + passwordCriteriaBuilder(true, true, true, true))
