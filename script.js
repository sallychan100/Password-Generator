// Array of special characters to be included in password
var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
  
  // Array of numeric characters to be included in password
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  // Array of lowercase characters to be included in password
  var lowerCasedCharacters = [
    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
    ];
  
  // Array of uppercase characters to be included in password
  var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  
  // Function to prompt user for password options
  function getPasswordOptions() {
    // Variable to store length of password from user input
    var length = parseInt(
      prompt('How many characters would you like your password to contain?')
    );
  
    // check if user have a valid password length. Prompts end if this evaluates false
    if (Number.isNaN(length)) {
      alert('Password length must be provided as a number');
      return null;
    }
  
    // check if password length is at least 8 characters long. Prompts end if this evaluates false
    if (length < 8) {
      alert('Password length must be at least 8 characters');
      return null;
    }
  
    // check if password length is less than 128 characters long. Prompts end if this evaluates false
    if (length > 50) {
      alert('Password length must less than 50 characters');
      return null;
    }
  
    // Variable to store boolean regarding the inclusion of special characters
    var hasSpecialCharacters = confirm(
      'Click OK to confirm including special characters.'
    );
  
    // Variable to store boolean regarding the inclusion of numeric characters
    var hasNumericCharacters = confirm(
      'Click OK to confirm including numeric characters.'
    );
  
    // Variable to store boolean regarding the inclusion of lowercase characters
    var hasLowerCasedCharacters = confirm(
      'Click OK to confirm including lowercase characters.'
    );
  
    // Variable to store boolean regarding the inclusion of uppercase characters
    var hasUpperCasedCharacters = confirm(
      'Click OK to confirm including uppercase characters.'
    );
  
    // // Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
    // if (
    //   hasSpecialCharacters === false &&
    //   hasNumericCharacters === false &&
    //   hasLowerCasedCharacters === false &&
    //   hasUpperCasedCharacters === false
    // ) {
    //   alert('Must select at least one character type');
    //   return null;
    // }
  
    // create an object to store user input
    var passwordOptions = {
      length: length,
      hasSpecialCharacters: hasSpecialCharacters,
      hasNumericCharacters: hasNumericCharacters,
      hasLowerCasedCharacters: hasLowerCasedCharacters,
      hasUpperCasedCharacters: hasUpperCasedCharacters
    };
  
    return passwordOptions;
  }
  
  // Function for getting a random element from an array
  function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];
  
    return randElement;
  }
  
  // Function to generate password with user input
  function generatePassword() {
    var options = getPasswordOptions();
    // Variable to store password as it's being concatenated
    var result = [];
  
    // Array to store types of characters to include in password
    var possibleCharacters = [];
  
    // Array to contain one of each type of chosen character to ensure each will be used
    var guaranteedCharacters = [];


// Based on user input, we add possible characters into possible characters and guranteed characters: 
  
    if (options.hasSpecialCharacters) {
        // concat means combing two arrays
      possibleCharacters = possibleCharacters.concat(specialCharacters);

      // push means adding new element into array
      guaranteedCharacters.push(getRandom(specialCharacters));
    }
  
    if (options.hasNumericCharacters) {
      possibleCharacters = possibleCharacters.concat(numericCharacters);
      guaranteedCharacters.push(getRandom(numericCharacters));
    }

    if (options.hasLowerCasedCharacters) {
      possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
      guaranteedCharacters.push(getRandom(lowerCasedCharacters));
    }
  
    if (options.hasUpperCasedCharacters) {
      possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
      guaranteedCharacters.push(getRandom(upperCasedCharacters));
    }
  
    // For loop to iterate over the password length from the options object, selecting random indices from the array of possible characters and concatenating those characters into the result variable
    for (var i = 0; i < options.length; i++) {
      var possibleCharacter = getRandom(possibleCharacters);
  
      result.push(possibleCharacter);
    }
  
    // Mix in at least one of each guaranteed character in the result
    // for (var i = 0; i < guaranteedCharacters.length; i++) {
    //   result[i] = guaranteedCharacters[i];
    // }
  
    // Transform the result into a string and pass into display()
    return result.join('');
  }
  
  var Btn = document.querySelector('#generate');
  
  // Display password to the #password input
  function display() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
  
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  Btn.addEventListener('click', display);
  