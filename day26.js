// WPU Coding Challenge 2024
// Traffic Light
// 26/336
// https://www.codewars.com/kata/56b1f01c247c01db92000076

// barbar 

function updateLight(curr) {
    lamp = curr.toLowerCase()
    if (lamp === 'red') {
        return 'Green'
    } else if (lamp === 'green') {
        return 'Yellow'
    } else {
        return 'Red'
    }
}

// one liner
const updateLight2 = curr =>  curr === 'red' ? 'Green' : curr === 'green' ? 'Yellow' : 'Red'

// more answer from pak sandhika
    // switch case
    function updateLight3(curr) {
        lamp = curr.toLowerCase()
        switch (lamp) {
            case 'red': return 'Green';
            case 'green': return 'Yellow';
            default: return 'Red';
        }
    }

    // object 
    const rules = {
      green: 'yellow',
      yellow: 'red',
      red: 'green',
    };

    function updateLight4(current) {
      return rules[current];
    }

    // object keys

    const updateLight5 = curr => 
    ({
        green: 'yellow',
        yellow: 'red',
        red: 'green',
    }[curr])

console.log(updateLight5('yellow'));