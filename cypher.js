
/* ============================================ CAESAR CIPHER: DESCRIPTION ================================================== 

This program is a cipher that encodes an inputted string, using a Caesar Cipher format, where the inputted characters are 
shifted 15 characters ahead, rotating through the ASCII Decimal limits for lowercase and uppercase letters.
The program function uses an 'if' statement and a 'for' loop with a nested 'if..else' statement to encode the text, 
and returns the encoded value or message inputted.
The output prints spaces and punctuation marks as themselves, and prints uppercase or lowercase letters as the character 
shifted ahead by 15. Example: 
  - if the inputted character is lowercase 'a', the program rotates through the ASCII Decimals between 97 and 122, 
    shifting 'a' 15 places ahead, so the encoded output would be lowercase 'p'.
  - if the inputted character is uppercase 'W', the program rotates through the ASCII decimal index between 65 and 90, 
    shifting 'W' 15 places ahead, so the encoded output would be uppercase 'L'.

============================================================================================================================= */


// The variable 'inputString' declares the string to be encoded. 
// The variable 'shiftByAmount' is given a value of '15' (i.e.: the number of shifts for each character).
let inputString = "Hello! How are you?"; 
let shiftByAmount = 15;

// The function 'applyCaesarCipher' is declared with the parameters of 'inputString' and 'shiftByAmount'.
function applyCaesarCipher(inputString, shiftByAmount) {

    // This 'if' statement's condition checks if the 'shiftByAmount' value is less than 0.
    // If the condition is true, the function returns the 'inputString' values shifted forward by the 'shiftByAmount' value
    // plus 26 (i.e. 'inputString' shifted by (15 + 26)).
    // '+ 26' offsets the shift so that it rotates through the given ASCII Decimal limits 26 times, (i.e. the length of the 
    // alphabet), resulting in an output that is the same character as the inputted character.  
    // This ensures that inputted punction marks and spaces are printed as themselves (i.e. if the input contains '!', 
    // the output also prints '!'.) 
    if (shiftByAmount < 0)
      return applyCaesarCipher(inputString, shiftByAmount + 26);
    
    // This variable stores the results of the 'for' loop iterations.
    resultStore = "";
    
    // This 'for' loop iterates through the inputted string, ending at the last character of the string.
    // The variable 'characterOfInputString' stores each iteration of the characters in 'inputString'(i.e.: inputString[i]).
    for (i = 0; i < inputString.length; i++) {
      let characterOfInputString = inputString[i];
      
      // This 'if' statement's condition uses the '.match()' method to check if the characters in 'characterOfInputString'
      // match the regular expression's pattern (in this case the pattern of '/[a-z]/').
      // The '/i' in '.match(/[a-z]/i)' ensures that the search for a match is case-insensitive.
      // The variable 'asciiDecimalValue' uses '.charCodeAt(i)' to store the ASCII Decimal values of the characters in 'inputString'.
      if (characterOfInputString.match(/[a-z]/i)) {
        asciiDecimalValue = inputString.charCodeAt(i);
        console.log("ascii: " + asciiDecimalValue);
        
        // This 'if..else if' statement checks for lowercase and capital letters in the inputted string.
        // If the 'asciiDecimalValue' is between 65 and 90 it is an uppercase letter on the ASCII Table.  
        if ((asciiDecimalValue >= 65) && (asciiDecimalValue <= 90))
          // The variable 'characterOfInputString' uses the 'String.fromCharCode' method to return a string from the specified 
          // ASCII values (in this case the uppercase letters on the ASCII Table, in the range of ASCII Decimals 65 to 90.)
          // The parameter calculations for 'String.fromCharCode' are as follows:
          //  - Subtract the lower limit of the specified ASCII values (i.e. 65) from 'asciiDecimalValue' and 
          //    add the result to 'shiftByAmount' (i.e.: x - 65 + 15). 
          //  - Find the remainder of '(x - 65 + 15) divided by 26', using the modulus operator (%). 
          //    '26' is the number of characters to rotate through in the specified ASCII values.
          //  - Add the lower limit of the specified ASCII values (i.e. 65) to the remainder result, i.e.: ((x - 65 + 15) % 26) + 65).     
          characterOfInputString = String.fromCharCode(((asciiDecimalValue - 65 + shiftByAmount) % 26) + 65);
        // Else if the 'asciiDecimalValue' is between 97 and 122 it is a lowercase letter on the ASCII Table.
        // The same execution as the 'if' statement above runs in the 'else..if' statement below, but the lower limit 
        // of the specified ASCII values changes to '97' because '97' is the ASCII Decimal value of the lowercase character 'a' in 
        // the ASCII Table.
        else if ((asciiDecimalValue >= 97) && (asciiDecimalValue <= 122))
          characterOfInputString = String.fromCharCode(((asciiDecimalValue - 97 + shiftByAmount) % 26) + 97);
      }
      // This adds each iterations' character in 'characterOfInputString' to the 'resultStore' variable.
      resultStore += characterOfInputString;
    }
    // This returns the characters stored in the 'resultStore' variable (i.e. the encoded message).  
    return resultStore;
  };

//This calls the function, using the parameters of 'inputString' and 'shiftByAmount)', and prints it to the console.
console.log(`The encoded message is: ${applyCaesarCipher(inputString, shiftByAmount)}`);


/* ================================================== REFERENCES =================================================================== 

The ASCII table:
https://en.m.wikipedia.org/wiki/File:ASCII-Table-wide.svg

How to encode with Caesar Cipher in JavaScript:
https://stackhowto.com/caesar-cipher-in-javascript/#:~:text=Caesar's%20cipher%2C%20also%20known%20as,or%20down%20in%20the%20alphabet.

How to use .charCodeAt() to find ASCII character codes in a string:
https://www.w3schools.com/jsref/jsref_charcodeat.asp

How to use String.fromCharCode() to return a string from ASCII character codes:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
https://www.geeksforgeeks.org/javascript-string-fromcharcode-method/
https://www.w3schools.com/jsref/jsref_fromcharcode.asp
https://www.techonthenet.com/js/string_fromcharcode.php

How to use the .match() method:
https://www.w3schools.com/jsref/jsref_match.asp
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match

Understanding regular expressions:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp

Using the modulus operator (%) in JavaScript:
https://www.educative.io/edpresso/what-is-the-modulo-operator-in-javascript
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder

================================================================================================================================== */
