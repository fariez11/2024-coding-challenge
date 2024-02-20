// WPU Coding Challenge 2024
// Grasshopper - Grade bookTotal amount of points
// 14/336
// https://www.codewars.com/kata/55cbd4ba903825f7970000f5

// code


// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'

// barbar version
function getGrade(s1,s2,s3){
    const avg = (s1+s2+s3) / 3
    console.log(avg);

    if(avg >= 90){
        return 'A'
    }else if(avg >= 80 && avg < 90){
        return 'B'
    }else if(avg >= 70 && avg < 80){
        return 'C'
    }else if(avg >= 60 && avg < 70){
        return 'D'
    }else{
        return 'F'
    }
}

// versi pak sandhika
function getGrade2(s1,s2,s3){
    const score = (s1 + s2 + s3) / 3 
    console.log(score);

    if(score < 60) return 'F'
    if(score < 70) return 'D'
    if(score < 80) return 'C'
    if(score < 90) return 'B'
    return 'A'
}


// reduce
function getGrade3(...s){
    const avg = s.reduce((acc,cur) => acc + cur) / s.length
    console.log(avg);
    return avg < 60 ? 'F' : avg < 70 ? 'D' : avg < 80 ? 'C' : avg < 90 ? 'B' : 'A'
}



console.log(getGrade3(70,90,60));