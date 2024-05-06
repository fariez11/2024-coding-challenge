// WPU Coding Challenge 2024
// Will there be enough space?
// 30/366
// https://www.codewars.com/kata/5875b200d520904a04000003

// barbar 

function enough(cap, on, wait) {
    if(cap >= on + wait){
        return 0
    }else{ 
        return wait - (cap - on)
    }
}

// oneliner
const enough1 = (cap, on, wait) => (cap >= on + wait) ? 0 : wait - (cap - on)

console.log(enough(100,60,50));