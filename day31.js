// WPU Coding Challenge 2024
// Third Angle of a Triangle
// 31/366
// https://www.codewars.com/kata/5a023c426975981341000014

// barbar
function otherAngle(a, b) {
    return 180 - (a + b)
}

// oneliner
const otherAngle2 = (a,b) => 180 - (a + b)

console.log(otherAngle2(60,60));