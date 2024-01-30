// WPU Coding Challenge 2024
// DNA to RNA Conversion
// 6/336
// https://www.codewars.com/kata/5556282156230d0e5e000089


// code 

// bar bar version

function DNAtoRNA(dna) {
    let rna = ''

    if(dna == ''){
        return 'Input string is empty.'
    }

    for (let i = 0; i < dna.length; i++) {
        
       if(dna[i] == 'G'|| dna[i] == 'C' || dna[i] == 'A' || dna[i] == 'T'){
           // if(dna[i] === 'T'){
           //     rna += 'U'
           // }else{
           //     rna+= dna[i]
           // }
           rna += (dna[i] === 'T') ? 'U' : dna[i]
       }else{
            rna = "Invalid character found in input string."
       }

    }

    return rna 
}

// simple version

const DNAtoRNA2 = dna => dna.split('T').join('U')

// using map

function DNAtoRNA3(dna) {
    return dna.split('').map( h => h === 'T' ? 'U' : h).join('')
}

// using replace
const DNAtoRNA4 = (dna) => dna.replace(/T/g,'U')

// another replace
const DNAtoRNA5 = dna => dna.replaceAll('T','U')

console.log(DNAtoRNA2("GACTT"));