// WPU Coding Challenge 2024
// (Reverse Squence)
// 2/336
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/javascript

// using for
    const reverseSeq = (n) => {
        const result = []
        for (let i = n; i >= 1; i--) {
            result.push(i)
        }
        return result
    };
    console.log(reverseSeq(5));

    const reverseSeqb = n => {
        let arr = []
        for (i = 1; n >= i; i++) {
            arr.push(i)
        }
        return arr.reverse();
    };
    console.log(reverseSeqb(5));

// using higher order function 

    const reverseSeq2 = n => {
        // return [...Array(n)].map((angka,i) => i + 1).reverse()               // [...Array(n)] == Array(n).fill()
        // return Array(n).fill().map((angka,i) => i + 1).reverse()
        return Array(n).fill().map((angka, i) => n - i)
    }
    console.log(reverseSeq2(5));


// using while 
    const reverseSeq3 = n => {
        let arr = [];

        while (n > 0) {
            arr.push(n);
            n--;
        }
        return arr;
    };
    console.log(reverseSeq3(5));