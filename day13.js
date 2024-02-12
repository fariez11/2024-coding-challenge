// WPU Coding Challenge 2024
// Total amount of points
// 13/336
// https://www.codewars.com/kata/5bb904724c47249b10000131

// code

// barbar version
function points(games) {
    let points = 0
    for (let i = 0; i < games.length; i++) {
        if (games[i][0] > games[i][2]) {
            points += 3
        } else if (games[i][0] === games[i][2]) {
            points += 1
        }
    }

    return points
}

// higher order function (reduce) & destructuring assignment
function points2(games) {
    const points = games.reduce((acc, [x, _, y]) => (x > y ? 3 : x === y ? 1 : 0) + acc, 0)

    return points
}

// one liner
const points3 = games => games.reduce((acc, [x, _, y]) => (x > y ? 3 : x === y ? 1 : 0) + acc, 0)

// higher order func (map)   another answer

function points(games) {
    let total = 0;
    games.map(game => {
        if (game[0] === game[2]) {
            total += 1;
        } else if (game[0] > game[2]) {
            total += 3;
        }
    });
    return total;
}


console.log(points3(["1:0", "2:0", "3:0", "4:0", "1:1", "3:1", "4:1", "3:2", "4:2", "4:3"]));