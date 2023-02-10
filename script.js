var lowercaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbersChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbolsChar = ['!', '@', '#', '$', '%', '&', '*', '(', ')'];

// Step 1: Ask user for password length
function getUserLength() {
    return prompt('Enter the length of your password: ')
}

// Step 2: Validate the length of password is correct
function validateLength(length) {
    if (length < 8 | length > 128 ) {
        alert('Password is wrong length. Try again.')
    }
}

var pwdLength = getUserLength()
validateLength(pwdLength)

// Step 3: Collect all password requirements
function getLowercase() {
    return prompt('Include lowercase characters? (Yes or No)')
}

function getUppercase() {
    return prompt('Include uppercase characters? (Yes or No)')
}

function getNumChars() {
    return prompt('Include numbers? (Yes or No)')
}

function getSymbols() {
    return prompt('Include special characters? (Yes or No)')
}

// var resLower = getLowercase()
// var resUpper = getUppercase()
// var resNums = getNumChars()
// var resSymbols = getSymbols()
// resLower, resUpper, resNums, resSymbols

// Step 4: Take password requirements and generate password
function createPassword(pwdLength) {
    var min = Math.pow(10, pwdLength - 1)
    var max = Math.pow(10, pwdLength) - 1
    var pwd = Math.floor(Math.random() * (max - min + 1)) + min
    pwdText = pwd.toString() 
    return pwdText
}

createPassword()
