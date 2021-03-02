// Assignment Code
var generateBtn = document.querySelector("#generate");

// global variables
var lengthCriteria = 8;
var lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz';
var upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numerals = '1234567890';
var specialAlphabet = '`~!@#$%^&*<>?=+-_{}[]:;';

//selectrandom character function
function randomChar(alphabet) {
  return alphabet[Math.floor(Math.random()*alphabet.length)];
}

//shuffle function (Fisher-Yates shuffle)
function shuffle(array) {
  var m = array.length, t, i;
  while (m) {
    //Picks a remaining element from array
    i = Math.floor(Math.random() *m--);

    //swaps w/ current element
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}

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
  pwLength();

  // Caps
  if (confirm("Does password require capitalized characters?")) {
    var counter = Math.floor(Math.random() * (lengthCriteria - 3) + 1);
    for (i = 0; i < counter; i++) {
      //push random capitals to pwCharacters[]
      pwCharacters.push(randomChar(upperAlphabet));
      //lengthCriteria to be the "remaining" pw length
    }
    lengthCriteria = lengthCriteria - counter;
  }

  // Numerals
  if (confirm("Does password require numerals?")) {
    var counter = Math.floor(Math.random() * (lengthCriteria - 2) + 1);
    for (i = 0; i < counter; i++) {
      pwCharacters.push(randomChar(numerals));
    }
    lengthCriteria = lengthCriteria - counter;
  }

  // special characters
  if (confirm("Does password require special characters?")) {
    var counter = Math.floor(Math.random() * (lengthCriteria - 1) + 1);
    for (i = 0; i < counter; i++) {
      pwCharacters.push(randomChar(specialAlphabet));
    }
    lengthCriteria = lengthCriteria - counter;
  }

  //push random lowercase letters for remaining length:
  for (i=0; i<lengthCriteria; i++) {
    pwCharacters.push(randomChar(lowerAlphabet));
  }

  //call shuffle function here (used Fisher-Yates shuffle):
  shuffle(pwCharacters);

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
