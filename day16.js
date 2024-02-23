// WPU Coding Challenge 2024
// Sum without highest and lowest number
// 16/336
// https://www.codewars.com/kata/563e320cee5dddcf77000158

// code

// barbar version
function getAvg(marks){
    let total = 0
    for (let i = 0; i < marks.length; i++) {
       total += marks[i]
    }

    return Math.floor(total / marks.length)
}

// using reduce
function getAverage(marks){
    return Math.floor(marks.reduce((acc,curr) => acc + curr) / marks.length)
}

// one liner
const getAverage2 = (marks) => Math.floor(marks.reduce((acc,curr) => acc + curr) / marks.length)

console.log(getAverage2([1,2,3,4,5]));