// WPU Coding Challenge 2024
// The Feast of Many Beasts
// 20/336
// https://www.codewars.com/kata/5aa736a455f906981800360d

// code

function feast(beast, dish){
    return beast[0] == dish[0] && beast[beast.length -1] == dish[dish.length -1] 
}

// using charAt (at is simple version)

function feastAt(beast, dish){
    return beast.charAt(0) === dish.charAt(0) && beast.at(-1) === dish.at(-1)
}

// one liner
const feastOne = (beast, dish) => beast.at(0) === dish.at(0) && beast.at(-1) === dish.at(-1)

// more answers from codewars
    // using slice 
    const sliceFeast=(beast, dish)=>beast.slice(0,1)==dish.slice(0,1)&&beast.slice(-1)==dish.slice(-1)

    // using substr
    function feastSubstr(beast, dish) {
        return beast[0] === dish[0] && beast.substr(-1) === dish.substr(-1);
    }

    // using split and (shift & pop)
    const ssFeast = (beast, dish) => beast.split('').shift() == dish.split('').shift() &&  beast.split('').pop() == dish.split('').pop()



console.log(ssFeast('great blue heron', 'garlic naan'));

