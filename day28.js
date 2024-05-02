// WPU Coding Challenge 2024
// Do I Get a Bonus ?
// 28/336
// https://www.codewars.com/kata/56f6ad906b88de513f000d96

// barbar

function bonusTime(salary,bonus){
    return bonus ? `₤${salary * 10}` : `₤${salary}`
}

// one liner 
    const bonusTime2 = (salary, bonus) => bonus ? `£${salary * 10}` : `£${salary}`
    
// more answer from pak sandhika
    const bonusTime3 = (salary, bonus) => `£${bonus ? salary * 10 : salary }`


console.log(bonusTime3(430,true));