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


// parseFloat - metoda vraca realan broj (sa decimalnim zapisom) dobijen konvertovanjem argumenta

console.log(parseFloat("string")) //NaN
console.log(parseFloat("34")) //34
console.log(parseFloat("34.456")) //34.456
console.log(parseFloat("    34   ")) //34
console.log(parseFloat("34 43")) //34 -razmaci su dozvoljeni. parsira se samo prva vrednost
console.log(parseFloat("3asd4 43")) //34-razmaci su dozvoljeni. parsira se samo prva vrednost
console.log(parseFloat("3asd4 43")) //NaN

console.log(parseFloat(true)) //NaN
console.log(parseFloat(false)) //NaN
console.log(parseFloat([1, 2])) //1
console.log(parseFloat([])) //NaN
console.log(parseFloat({})) // NaN

// parseInt() - metoda vraca realan broj (ceo) dobijen konvertovanjem argumenta
console.log(parseInt("string")) //NaN
console.log(parseInt("34")) //34
console.log(parseInt("34.456")) //34
console.log(parseInt("34.856")) //34
console.log(parseInt("    34   ")) //34
console.log(parseInt("34 43")) //34 -razmaci su dozvoljeni. parsira se samo prva vrednost
console.log(parseInt("3asd4 43")) //34-razmaci su dozvoljeni. parsira se samo prva vrednost
console.log(parseInt("3asd4 43")) //NaN

console.log(parseInt(true)) //NaN
console.log(parseInt(false)) //NaN
console.log(parseInt([1, 2])) //1
console.log(parseInt([])) //NaN
console.log(parseInt({})) // NaN

function kmToM (km){
    return km * 1000
}
console.log(kmToM(2))

function mToKm (m){
    let km = m/1000
    return km.toFixed(2)
}
console.log(mToKm(600))

function incToCm (cm){
    let inc = cm/2.54
    return inc.toFixed(2)
}
console.log(incToCm(34))