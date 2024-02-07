// WPU Coding Challenge 2024
// Convert a string to an array
// 11/336
// https://www.codewars.com/kata/57e76bc428d6fbc2d500036d

// code
// barbar version

const rps = (p1, p2) => {

    if (p1 === p2) return 'Draw!'

    if (p1 === 'rock' && p2 === 'scissors') {
        return 'Player 1 won'
    } else if (p1 === 'scissors' && p2 === 'paper') {
        return 'Player 1 won'
    } else if (p1 === 'paper' && p2 === 'rock') {
        return 'Player 1 won'
    } else {
        return 'Player 2 won'
    }


}

// using or
const orRps = (p1, p2) => {

    if (p1 === p2) return 'Draw!'

    if (p1 === 'rock' && p2 === 'scissors' || p1 === 'scissors' && p2 === 'paper' || p1 === 'paper' && p2 === 'rock') {
        return 'Player 1 won'
    } else {
        return 'Player 2 won'
    }
}

// ternary 
const ternaryRps = (p1, p2) => {
    return (p1 === p2) ? 'Draw!' : (p1 === 'rock' && p2 === 'scissors' || p1 === 'scissors' && p2 === 'paper' || p1 === 'paper' && p2 === 'rock')
        ? 'Player 1 won' : 'Player 2 won'
}

// object
const objectRps = (p1, p2) => {
    const rules = {
        'rock' : 'scissors',
        'scissors' : 'paper',
        'paper' : 'rock',
    }

    return p1 === p2 ? 'Draw!' : `Player ${rules[p1] === p2 ? '1' : '2'} won!`
}



console.log(objectRps("paper", "rock"));