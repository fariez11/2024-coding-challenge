// WPU Coding Challenge
// 1/336
// https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript

// using function declaration 

    function grow(x) {
        return x.reduce((acc,curr)=> acc*curr,1)
    }

    console.log(grow([2, 2, 2, 2, 2, 2]));



// using function expression

    const anotherGrowA = (x) => x.reduce((acc,curr)=> acc*curr,1)
    console.log(anotherGrowA([1,2,3]));


// for

    function anotherGrowB(x){
        let result = x[0]
        for (let i = 1; i < x.length; i++) {
            result *= x[i]
        }

        return result
    }
    console.log(anotherGrowB([4, 1, 1, 1, 4]));