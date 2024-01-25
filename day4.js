// WPU Coding Challenge 2024
// Sentence smash
// 4/336
// https://www.codewars.com/kata/53dc23c68a0c93699800041d

// arrow func

const smash = (words) => words.join(' ')

// barbar 

// function smash(words){
//     let result = ''
//     for (let i = 0; i < words.length; i++) {
//         (i != words.length -1) ? result += `${words[i]} ` : result += `${words[i]}`  
//     }
//     return result
// }

// result 

console.log(smash(['hello', 'world', 'this', 'is', 'great']));