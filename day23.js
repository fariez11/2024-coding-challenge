// WPU Coding Challenge 2024
// Count the Monkeys!
// 23/336
// https://www.codewars.com/kata/56f69d9f9400f508fb000ba7

// code

function monkeyCount(n) {
    let result = []
    for (let i = 1; i <= n; i++) {
        result.push(i)
    }
    return result
}


// using Array.from (pak sandhika)
function monkeyCount2(n){
    // return Array.from({length : n}, (v,i) => i + 1)
    return Array.from({length : n}, (_,i) => i + 1)
}

    // oneliner

    const monkeyCount3 = monkey => Array.from({length : monkey}, (_,i) => i + 1)


// more answer from codewars
    // 2 variabel inisialisasi

    function monkeyCount4(n) {
        for (var i = 0, arr = []; i < n; arr.push(++i));
        return arr;
      }

console.log(monkeyCount4(10));