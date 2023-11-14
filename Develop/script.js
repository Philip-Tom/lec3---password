// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var length = prompt("Enter the length of your password between 8 characters and 128 characters");

  if (length < 8 || length > 128) {
    alert("Please enter a valid password between 8 characters and 128 characters");
    return "";
  }

  // asking the user for character types
  var inludeLowercase = prompt("Shall I include lowercase characters?");
  var inludeUppercase = prompt("Shall I include uppercase characters?");
  var inludeNumeric = prompt("Shall I include numeric characters?");
  var includeSpecial = prompt("Shall I include special characters?");

  // validating that at least one character type should be selected
  if (!(inludeLowercase || inludeUppercase || inludeNumeric || includeSpecial)) {
    alert("Please select atleast one character type!!!");
    return "";
  }

  // charaters defined
  var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericCharacters = "0123456789";
  var specialCharacters = `~!@#$%^&*()-_+={}][|\`,./?;:'"<>`;

  // we will be combining the characters
  var selectedCharacter = "";
  if (inludeLowercase) {
    selectedCharacter = selectedCharacter + lowercaseCharacters;
  }
  if (inludeUppercase) {
    selectedCharacter = selectedCharacter + uppercaseCharacters;
  }
  if (inludeNumeric) {
    selectedCharacter = selectedCharacter + numericCharacters;
  }
  if (includeSpecial) {
    selectedCharacter = selectedCharacter + specialCharacters;
  }

  // we need to generate the password here
  var password = "";
  for (var i = 0; i < selectedCharacter.length; i++) {
    var randomIndex = Math.floor(Math.random() * selectedCharacter.length);
    password = password + selectedCharacter.charAt(randomIndex);
  }
  return password;
}
