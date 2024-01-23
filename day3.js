// WPU Coding Challenge 2024
// (Is he gonna Survive?)
// 3/336
// https://www.codewars.com/kata/59ca8246d751df55cc00014c

// using if
function hero(bullets, dragons) {
    // if(bullets / 2 >= dragons){
    //     return true
    // }else{
    //     return false
    // }

    return (bullets / 2 >= dragons) ? true : false
}
console.log(hero(14,7));

// using truthy / falsy

function hero2(bullets, dragons) {
    return (bullets / 2 >= dragons)
}
console.log(hero2(8,16));


// function expression 
const hero3 = (bullets,dragons) => bullets / 2 >= dragons
const hero4 = (bullets,dragons) => bullets >= dragons *2

console.log(hero3(10,5));
