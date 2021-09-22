var specialCharaters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
]

var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];



var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];



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


var passwordLenght = prompt("Enter the lenght of your password");
if(parseInt(passwordLenght) >= 8 && parseInt(passwordLenght <= 128)){
  alert("Please enter a proper password");
}
else if (passwordLenght < 8 || passwordLenght > 128){
  passwordLenght = parseInt(prompt("Please choose a number between 8 and 128"));
}
else {
  confirmNumber = confirm("Do you want your password to contain numbers?");
  confirmCharacter = confirm("Do you want this password to contain special characters?");
  confirmUppercase = confirm("Do you want this password to contain Uppercase letters?");
  confirmLowercase = confirm("Do you want this password to contain lowercanse letters?");
}


combineArrays = [];

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
}