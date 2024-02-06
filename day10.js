// WPU Coding Challenge 2024
// Convert a string to an array
// 10/336
// https://www.codewars.com/kata/57e76bc428d6fbc2d500036d

// code
// barbar version
function stringToArray(string) {

    let newStr = "";
    let result = [];
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== " ") {
            newStr = newStr + string[i]
        }
        else {
            result.push(newStr);
            newStr = "";
        }
    }
    result.push(newStr);
    return result;
}



// using split() 
const stringToArray = sentence => sentence.split(' ')

console.log(stringToArray("I love arrays they are my favorite"));