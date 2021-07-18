// array of special characters to be included in password
var specialCharacters = [
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
    '.',
];

//array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//Array of lowercase characters to be included in password
var lowercasedCharacters = [
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

//Array of uppercase characters to be included in password
var uppercasedCharacters = [
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

//Function to prompt user for password options
function getpasswordoptions() {
    //Variable to store length of password from user input
    var length = parseInt(
        prompt('How many characters would you like your password to contain?')
    );

    //conditional statement to check if password length is a number. Prompts end if this evaluates false 
    if (isNaN(length) === true) {
        alert('Password length must be provided as a number');
        return;
    }

    //conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
    if (length <10) {
        alert('Password length must be at least 10 characters');
        return;
    }

    //conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
    if (length > 64) {
        alert('Password length must be less than 65 characters');
        return;
    }

    //variable to store boolean regarding the inclusion of special characters
    var hasSpecialCharacters = confirm(
        'Click OK to confirm including special characters.'
    );

    //variable to store boolean regarding the inclusion of numeric character
    var hasNumericCharacters = confirm(
        'Click OK to confirm including numeric characters.'
    );

    //variable to store boolean regarding the inclusion of lowercase characters
    var hasLowerCasedCharacters = confirm(
        'Click OK to confirm including lowercase characters.'
    );

    //variable to store boolean regarding the inclusion of uppercase characters
    var hasUpperCasedCharacters = confirm(
        'Click OK to confirm including uppercase characters.'
    );

    //conditional statement to check if user does not include any types of characters. Password ends if all four variables
    if (
        hasSpecialCharacters === false &&
        hasNumericCharacters === false &&
        hasLowerCasedCharacters === false &&
        hasUpperCasedCharacters === false 
    ) {
        alert('Must select at least one character type');
        return;
    }

    //object to store user input
    var passwordOptions = {
        length: length,
        hasSpecialCharacters: hasSpecialCharacters,
        hasNumericCharacters: hasNumericCharacters,
        hasLowerCasedCharacters: hasLowerCasedCharacters,
        hasUpperCasedCharacters: hasUpperCasedCharacters
    };
    
    return passwordOptions;
}

//Function for getting a random element from an array
function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];

    return randElement;
}

//function to generate password with user input
function generatePassword() {
    var options = getpasswordoptions();
    //variable to store password as it's being concatenated
    var result = [];

    //array to store types of characters to include in password
    var possibleCharacters =[];

    //array to contain one of each type of chosen character to ensure each will be used
    var guaranteedCharacters =[];

    //conditional statement that adds array of special characters into array of possible characters based on user input
    //push new random special character to guaranteedCharacters
    if (options.hasSpecialCharacters) {
        possibleCharacters = possibleCharacters.concat(specialCharacters);
        guaranteedCharacters.push(getRandom(specialCharacters));
    }

    if (options.hasNumericCharacters) {
        possibleCharacters = possibleCharacters.concat(numericCharacters);
        guaranteedCharacters.push(getRandom(numericCharacters));
    }

    if (options.hasLowerCasedCharacters) {
        possibleCharacters = possibleCharacters.concat(lowercasedCharacters);
        guaranteedCharacters.push(getRandom(lowercasedCharacters));
    }

    if (options.hasUpperCasedCharacters) {
        possibleCharacters = possibleCharacters.concat(uppercasedCharacters);
        guaranteedCharacters.push(getRandom(uppercasedCharacters));
    }

    for (var i = 0; i < options.length; i++) {
        var possibleCharacters = getRandom(possibleCharacters);

        result.push(possibleCharacters);
    }

    for (var i = 0; i < guaranteedCharacters.length; i++) {
        result[i] = guaranteedCharacters[i];
    }

    return result.join('');

    var generateBtn = document.querySelector('#generate');

    function writePassword() {
        var password = generatePassword();
        var passwordText = document.querySelector('#password');

        passwordText.value = password;

        generateBtn.addEventListener("click", writePassword);
    }


}