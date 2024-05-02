// WPU Coding Challenge 2024
// Quarter of The Year
// 24/336
// https://www.codewars.com/kata/5ce9c1000bab0b001134f5af

// code

const quarter = month => {
    if(month <= 3){
        return 1
    }else if(month <= 6){
        return 2 
    }else if(month <= 9){
        return 3
    }else if(month <= 12){
        return 4
    }else{
        return 'out of period'
    }
}

    // oneliner & ternary if
    const quarterOf = month => month <= 3 ? 1 : month <= 6 ? 2 : month <= 9 ? 3 : month <= 12 ? 4 : 'out of period'

// more answer from pak sandhika
    // pembulatan

    const quarterOf2 = month => Math.ceil(month / 3)

// more answer from codewars
    // switch case

    const quarterOfSC = (month, quarter = 4) => {
        switch (month) {
            case 1:
            case 2:
            case 3:
                quarter = 1;
                break;
            case 4:
            case 5:
            case 6:
                quarter = 2;
                break;
            case 7:
            case 8:
            case 9:
                quarter = 3;
                break;
        }
        return quarter;
    };

console.log(quarterOfSC(3));
