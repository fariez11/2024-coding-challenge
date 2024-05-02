// WPU Coding Challenge 2024
// Transportation on vacation
// 21/336
// https://www.codewars.com/kata/568d0dd208ee69389d000016

// code

function rentalCarCost(day){
    let diskon = 0 

    // if (day >= 3 && day <= 6){
    //     diskon = 20
    // }else if(day >= 7 ){
    //     diskon = 50
    // }

    // saran pak sandhika
        // jika menggunakan else if (dahulukan kondisi yang terbesar)
            // if(day >= 7) {                  
            //     diskon = 50
            // }else if(day >= 3){
            //     diskon = 20
            // }

        // tanpa else if (agar di cek 2 kali)
            if(day >= 3){
                diskon = 20
            }

            if(day >= 7){
                diskon = 50
            }
        

    return day * 40 - diskon
}

// dipersingkat

function shortRentalCarCost(day){
    return day * 40 - (day >= 7 ? 50 : day >= 3 ? 20 : 0)
}

    // one liner
    const rental = day => day * 40 - (day >= 7 ? 50 : day >= 3 ? 20 : 0)

console.log(rental(6));