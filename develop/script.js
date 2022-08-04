// Assignment code here
var length; //length of password (numbers 8-128)
var lowerCase; //lowercase
var upperCase; //upper case
var number; //numbers
var specialCase; //special character

//arrays
alphabetLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
alphabetUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
number = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
special = [" ", "!", "#", "$", "$", "%", "&", "'", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "_", "{", "}", "|", "~"];

//generatePassword function 

function generatePassword() {

  //alerts/prompts
  var length = window.prompt("Please enter a number betweek 8 and 128 for password length.");
  
  if (length < 8 || length > 128) {
    window.alert("Character length requirement was not met.  Please enter a number betweek 8 and 128 for password length.");
  }

  var lowerCase = window.prompt("Do you want to include lower case letters?");
  var upperCase = window.prompt("Do you want to include upper case letters?");
  var number = window.prompt("Do you want to includes numbers?");
  var specialCase = window.prompt("Do you want to include special characters?");

};

