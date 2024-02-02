// WPU Coding Challenge 2024
// If You Can't Sleep, Just Count Sheep!
// 8/336
// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077

// code
const countSheep = function(num){
    let result = ''
    for (let i = 1; i <= num; i++) {
       result += `${i} sheep...`
    }

    return result
}

// arrow func (rest operator)

const countSheep2 = num => [...Array(num)].map((_,i) => `${i + 1} sheep...`).join('')


console.log(countSheep2(5));