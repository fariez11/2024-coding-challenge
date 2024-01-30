// WPU Coding Challenge 2024
// DNA to RNA Conversion
// 7/336
// https://www.codewars.com/kata/5513795bd3fafb56c200049e


// barbar version
function countBy(x,n){
    let z = []
    
    // for (let i = 0; i < n; i++) {                // cara saya
    //     z.push(x+i*x)
    // }
    for (let i = 1; i <= n; i++) {                  // cara wpu
        z.push(i*x)
    }
    return z
}


// map version

// function countBy2(x,n){
//     return [...Array(n)].map(i => (i + 1) * x)
// }

// arrow function 
    const countBy2 = (x,n) => [...Array(n)].map(i => (i + 1) * x)

console.log(countBy(1,10));
