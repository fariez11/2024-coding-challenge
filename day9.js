// WPU Coding Challenge 2024
// Find Maximum and Minimum Values of a List
// 9/336
// https://www.codewars.com/kata/577a98a6ae28071780000989

// code 
// barbar version
    var min = function (list) {
        let minValue = list[0]
        for (let i = 0; i < list.length; i++) {
            if (minValue > list[i]) {
                minValue = list[i]
            }
        }
        return minValue
    }

    var max = function (list) {
        let maxValue = list[0]
        for (let i = 0; i < list.length; i++) {
            if (maxValue < list[i]) {
                maxValue = list[i]
            }
        }
        return maxValue
    }


    console.log(min([-52, 56, 30, 29, -54, 0, -110]));
    console.log(max([-52, 56, 70, 29, -54, 0, -110]));


// sort() function

const sortMin = list => list.sort((a,b) => a - b)[0]
const sortMax = list => list.sort((a,b) => b - a)[0]



console.log(sortMin([-52, 56, 30, 29, -54, 0, -110]));
console.log(sortMax([-52, 56, 30, 29, -54, 0, -110]));

// min & maxfunction

const minFunc = list => Math.min(...list)
const maxFunc = list => Math.max(...list)

console.log(minFunc([4,6,2,1,9,63,-134,566]));
console.log(maxFunc([4,6,2,1,9,63,-134,566]));