// WPU Coding Challenge 2024
// Array plus array
// 12/336
// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151

// code

// barbar version 
function arrayPlusArray(arr1, arr2) {
    let result = 0

    for (let i = 0; i < arr1.length; i++) {
        result += arr1[i]
    }

    for (let i = 0; i < arr2.length; i++) {
        result += arr2[i]
    }

    return result
}

// barbar dinamis version 
function arrayPlusArray2(arr1, arr2) {
    let result = 0

    for (let i = 0; i < arguments.length; i++) {
        for (let j = 0; j < arguments[i].length; j++) {
            result += arguments[i][j]
        }
    }

    return result
}

//  spread operator & reduce
function arrayPlusArray3(arr1, arr2) {
    return [...arr1, ...arr2].reduce((acc, cur) => acc + cur, 0)
}

// one liner (function expression)
const arrayPlusArray4 = (arr1, arr2) => [...arr1, ...arr2].reduce((acc, cur) => acc + cur, 0)


// using concat
function arrayPlusArray5(arr1, arr2) {
    return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
}

console.log(arrayPlusArray5([1, 2, 3], [4, 5, 6]));
