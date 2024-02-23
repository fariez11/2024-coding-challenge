// WPU Coding Challenge 2024
// Sum without highest and lowest number
// 15/336
// https://www.codewars.com/kata/576b93db1129fcf2200001e6

// code

// barbar version
function sumArray(array){
    if(array === null || array.length <= 2 ) return 0

    const sortArray = array.sort((a,b) => a - b)           // mengurutkan array 
    let result = 0 
    for(i = 1; i < sortArray.length - 1; i++){
        result += sortArray[i]
    }

    return result
}


// using reduce
function sumArray2(array){
    if(array === null || array.length <= 2 ) return 0
    return array.sort((a,b) => a - b).slice(1,-1).reduce((acc,curr) => acc + curr) 
}


// using ternary
function sumArray3(array){
    return (array === null || array.length <= 2) ? 0 : array.sort((a,b) => a - b).slice(1,-1).reduce((acc,curr) => acc + curr) 
}


// one liner 
let sumArray4 = (array) => (array == null || array.length <= 2) ? 0 : array.sort((a,b) => a - b).slice(1,-1).reduce((acc,curr) => acc + curr) 

    // another case
    let sumArray5 = (array) => array ? array.sort((a,b) => a - b).slice(1,-1).reduce((acc,curr) => acc + curr) : 0 

console.log(sumArray5([6, 2, 1, 8, 10]));