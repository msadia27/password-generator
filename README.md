# Password Generator Starter Code

USER STORY
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

ACCEPTANCE CRITERIA
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria [(1) password ]

WHEN prompted for password criteria
THEN I select which criteria to include in the password
[user must select atleast 1 criteria]

WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters

var length: 8-128

WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

var lowercase 
var uppercase
var numeric
var special

WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected

WHEN all prompts are answered
THEN a password is generated that matches the selected criteria

WHEN the password is generated
THEN the password is either displayed in an alert or written to the page# password-generator
