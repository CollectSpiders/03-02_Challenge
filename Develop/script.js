// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let passwordLength;

// allows the user to enter a number between 8-128 to choose character length for their password
  while (!passwordLength || passwordLength < 8 || passwordLength > 128){
    passwordLength = Number(prompt("How long would you like your password to be? (Between 8-128 characters)", 8));
  }

  // asks the user a series of yes or no questions to generate a preferable type of password
  var lowerCase;
  var upperCase;
  var numeralChars;
  var specialChars;

  while (!lowerCase && !upperCase && !numeralChars && !specialChars){
    lowerCase = confirm("Would you like to include lower case letters in your password?");
    upperCase = confirm("Would you like to include upper case letters in your password?");
    numeralChars = confirm("Would you like to include numbers in your password?");
    specialChars = confirm("Would you like to include special characters in your password?");
  }

  var password = generatePassword(passwordLength, lowerCase, upperCase, numeralChars, specialChars);
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function generatePassword(passwordLength, lowerCase, upperCase, numeralChars, specialChars){
  // contains the numbers usable for the password
  const numerals = "0123456789";
  // contains the lower case characters for the password
  const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  // contains the upper case characters for the password
  const upperCaseCharacters = "ABCDEFGHIJKLMMMNOPQRSTUVWXYZ";
  // contains the special characters for the password?
  const specialCharacters = "`~!@#$%^&*()-_=+[{]}\\|;:',<.>/?";

  // containes the final generated password for the user
  let passwordOutput = '';

  // contains the selected variables (strings) to use in password generation
  let passwordChars = '';


  if (lowerCase === true){
    passwordChars += lowerCaseChars
  }

  if (upperCase === true){
    passwordChars += upperCaseCharacters
  }

  if (numeralChars === true){
    passwordChars += numerals
  }

  if (specialChars){
    passwordChars += specialCharacters
  }

  // loops through passwordChars and concats it together until it is equal to passwordLength variable
  for (let i = 0; i <= passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * passwordChars.length);
    passwordOutput += passwordChars.substring(randomNumber, randomNumber +1);
  }
  return passwordOutput;
}