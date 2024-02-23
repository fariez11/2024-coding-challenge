// WPU Coding Challenge 2024
// Grasshopper - Personalized Message
// 18/336
// https://www.codewars.com/kata/5ab6538b379d20ad880000ab

// code

// barbar version
function greet(name, owner) {
    if (name === owner) {
        return 'Halo Boss'
    } else {
        return `Halo Dek`
    }

    // if(name === owner) return `Halo Bos`         \   pak sandhika version
    // if(name !== owner) return `Halo Dek`         /

}

// using ternary + one liner
const greet2 = (name, owner) => name === owner ? `Hello boss` : `Hello guest`

// using string template literals
function greet3(name, owner) {
    return `Hello ${name == owner ? 'boss' : 'guest'}`
}

console.log(greet3('Sandhika', 'Sandhika'));
