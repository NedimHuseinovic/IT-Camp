// JavaScript globalne metode

// Globalne metode mozeemo primeniti na bilo koji tip podataka:

// Pomenucemo najpoznatije globalne metoda

// Number()
// parseFloat()
// parseInt()

//  1. Number()

console.log(Number("string")) //NaN
console.log(Number("34")) //34
console.log(Number("    34   ")) //34
console.log(Number("34 43")) //Nan

console.log(Number(true)) //1
console.log(Number(false)) //0
console.log(Number([1, 2])) //Nan
console.log(Number([])) //0
console.log(Number({})) //Nan
