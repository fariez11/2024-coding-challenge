// WPU Coding Challenge 2024
// Sum Mixed Array
// 19/336
// https://www.codewars.com/kata/57eaeb9578748ff92a000009

// code 

// me version hehe
function sumMixMe(x) {
    return x.map(i => Number(i)).reduce((acc, curr) => acc + curr)
    // return x.map(i=> +i).reduce((acc,curr) => acc + curr)            // +i juga bisa mengconvert string menjadi number
}


// barbar version
// function sumMix(x){
//     let total = 0

//     for (let i = 0; i < x.length; i++) {
//         total += parseInt(x[i])                     //  \\  parseInt(), Number(), + 
//         // total += Number(x[i])                         >> sama sama merubah string menjadi number
//         // total += +x[i]                               //
//     }

//     return total
// }

// using reduce
function sumMix(x) {
    return x.reduce((acc, curr) => acc + +curr, 0)
}
    // one liner
    const sumMix1Liner = x => x.reduce((acc, curr) => acc + +curr, 0)


// using for of
function sumMix(x) {
    let result = 0;
    for (let n of x) {
        result += parseInt(n);
    }
    return result;
}

console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]));



// *catatan :   - '+ di js bisa menjadi operasi matematik, konkantenasi / concat (penggabungan string)
//              - jika '+' ditempelkan dengan string maka dia bisa mengubah string tersebut menjadi number