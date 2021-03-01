// Assignment Code
var generateBtn = document.querySelector("#generate");

// global variables
var lengthCriteria = 8;

// pwLength function
function pwLength() {
  lengthCriteria = parseInt(
    prompt(
      "Please type the required password length (min of 8, max of 128)",
      "8"
    )
  );
  if (lengthCriteria < 8 || lengthCriteria > 128) {
    alert("Please input valid password length (min of 8, max of 128)");
    pwLength();
  }
}

// generatePassword function
function generatePassword() {
  var pwCharacters = [];
  var caps, numerals, specials;
  
  pwLength();

  // Caps
  if (confirm("Does password require capitalized characters?")) {
    for (i = 0; i < Math.floor(Math.random() * (lengthCriteria - 3) + 1); i++) {
      //push random capitals to pwCharacters[]

      lengthCriteria = lengthCriteria - i;
      //lengthCriteria is now the "remaining" pw length
    }
  }

  // Numerals
  if (confirm("Does password require numerals?")) {
    for (i = 0; i < Math.floor(Math.random() * (lengthCriteria - 2) + 1); i++) {
      //push random numbers to pwCharacters[]

      lengthCriteria = lengthCriteria - i;
    }
  }

  // special characters
  if (confirm("Does password require special characters?")) {
    for (i = 0; i < Math.floor(Math.random() * (lengthCriteria - 1) + 1); i++) {
      //push random special characters to pwCharacters[]
    }
  }

  //insert shuffle function here:

  //returns array as string w/ no spaces/commas b/t
  return pwCharacters.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
