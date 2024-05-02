// WPU Coding Challenge 2024
// Set Alarm
// 27/336
// https://www.codewars.com/kata/568dcc3c7f12767a62000038

// barbar
function setAlarm(employed, vacation){
    // return employed  && !vacation ? true : false
    return employed  && !vacation
}

// one liner
    const setAlarm2 = (working, vacation) =>  working && !vacation

// more answer from codewars
const setAlarm3 = (working, vacation) =>  working > !vacation           // karena true bernilai 1 dan false bernilai 0

console.log(setAlarm2(false,false));