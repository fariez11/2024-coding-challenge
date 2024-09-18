// WPU Coding Challenge 2024
// Remove Every Other
// 29/336
// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2

// bar bar

function removeEveryOther(arr){
    let result = []

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0 ) {
            result.push(arr[i])
        }        
    }

    return result
}

// more answer from pak sandhika
function removeEveryOther2(arr) {
    return arr.filter((el,i) => i % 2 == 0);
    // return arr.filter((el, i) => !(i & 1));
}
    // oneliner
    removeEveryOther2 = (arr) => arr.filter((el, i) => i % 2 == 0)

function removeEveryOther3(arr){
    let result = []
    for(let i = 0; i < arr.length; i+=2){
        result.push(arr[i])
    }

    return result
}
    // oneliner
    // const removeEveryOther3 = (arr) => arr.filter((el, i) => i % 2 == 0);

console.log(removeEveryOther2(['Hello', 'Goodbye', 'Hello Again']))

console.log(removeEveryOther3([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

// catatan : 
    // - bentuk sintax filter = filter((elemen, index, array) => { ... })