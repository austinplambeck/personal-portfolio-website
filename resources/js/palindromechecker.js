/* Auto Update Checker
const input = document.getElementById('input-text');
const output = document.getElementById('output-text');

const palindrome = () => {
    output.innerHTML = input.value
      .split('')
      .reverse()
      .join('')
      .replace(/[\W_]+/gi,'');
  }


*/


//Working Checker

function palindrome() {
    const input = document.getElementById("input").value;
    let output = "";

    for (i = input.length-1; i >= 0; i--) {
        output = output + input[i]
    }

    if (input == output) {
        document.getElementById("output").value = output + " is a palindrome!";
    }
    else {
        document.getElementById("output").value = output + " is not a palindrome.";
    }
}




/* OLD PALINDROME CHECKER

const input = document.getElementById('input-text');
const output = document.getElementById('output-text');

function stringWithOnlyAlphaNumeric(input) {
    // Replace takes a regex and a replacement string
    return input.replace(/[\W_]/ig, "");
}

function stringLowercased(input) {
    return input.toLowerCase();
}

function stringReversed(input) {
    let result = "";
    for (let i = input.length - 1; i >= 0; i--) {
        result += input[i];
    }
    return result;
}

function palindrome() {
    // Remove non-alphanumeric characters
    const cleanedUpStr = stringWithOnlyAlphaNumeric(input);

    // Make string lowercase
    const lowercaseStr = stringLowercased(cleanedUpStr);

    // Reverse the string
    const reversedStr = stringReversed(lowercaseStr);

    // Return the comparison of:
    // Reversed string equals to? lowercase cleaned up string

    output.innerHTML = `Is "${lowercaseStr}" equal to "${reversedStr}"`;
    
}

palindrome(input);

*/







/* Old Code Transformed
const input = document.getElementById("input").value;

function stringWithOnlyAlphaNumeric(input) {
    // Replace takes a regex and a replacement string
    return input.replace(/[\W_]/ig, "");
}

function stringLowercased(input) {
    return input.toLowerCase();
}

function stringReversed(input) {
    let result = "";
    for (let i = input.length - 1; i >= 0; i--) {
        result += input[i];
    }
    return result;
}

function palindrome() {
    // Remove non-alphanumeric characters
    const cleanedUpStr = stringWithOnlyAlphaNumeric(input);

    // Make string lowercase
    const lowercaseStr = stringLowercased(cleanedUpStr);

    // Reverse the string
    const reversedStr = stringReversed(lowercaseStr);

    // Return the comparison of:
    // Reversed string equals to? lowercase cleaned up string
    if (input == reversedStr) {
        document.getElementById("output").value = `${reversedStr} is a palindrome!`;
    }
    else {
        document.getElementById("output").value = reversedStr + " is not a palindrome.";
    }
}

*/