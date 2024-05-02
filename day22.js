// WPU Coding Challenge 2024
// Remove exclamation marks
// 22/336
// https://www.codewars.com/kata/57a0885cbb9944e24c00008e

// code

function removeExclamationMarks(sentence){
    let result = ''
    
    for(let i = 0 ; i < sentence.length ; i ++){
        if (sentence[i] !== '!') {
            result += sentence[i]
        }
    }
    return result
}

function removeExcMarks(kalimat){
    return kalimat.split('!').join('')
}

    // oneliner
    const hapusTandaSeru = kalimat => kalimat.split('!').join('')

    // using regex 
    const removeUseRegex = s => s.replace(/!/gi, '')

console.log(removeUseRegex('Hello World!'));


// catatan : 
//      regex : - g = global, cocokkan semua contoh pola dalam sebuah string, bukan hanya satu. 
//              -  i = case-insensitive (jadi, misalnya, /a/ i akan cocok dengan string "a" atau "A") .