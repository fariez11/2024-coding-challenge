// WPU Coding Challenge 2024
// Double Char
// 25/336
// https://www.codewars.com/kata/56b1f01c247c01db92000076

// code

function doubleChar(str){
    let result = ''

    for (let i = 0; i < str.length; i++) {
        result += str[i] + str[i]
        
        // answer from pak sandhika
            // result += str[i]
            // result += str[i]
    }

    return result
}

const doubleChar2 = str => [...str].map(el => el + el).join('')
const doubleChar3 = str => str.split('').map(el => el + el).join('')

console.log(doubleChar3('Adidas'));