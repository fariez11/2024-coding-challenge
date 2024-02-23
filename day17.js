// WPU Coding Challenge 2024
// Get the mean of an array
// 17/336
// https://www.codewars.com/kata/5ab6538b379d20ad880000ab

// code

// barbar version
const areaOrPerimeter = function(l,w){
    if (l === w) {
        return l * w
    }else{
        return (l + w) * 2
        // return 2 * l + 2 * w                    ~> pak sandhika version (rumus)
    }
}

// using ternary
const areaOrPerimeter2 = function (l,w){
    return l === w ? l * w : (l + w) * 2 
}

// one liner
const areaOrPerimeter3 = (l,w) => l === w ? l * w : (l + w) * 2

console.log(areaOrPerimeter2(6,11));