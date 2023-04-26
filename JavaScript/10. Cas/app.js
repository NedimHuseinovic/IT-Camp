/* const d = +prompt("Unesite duzinu terena: ")
const s = +prompt("Unesite sirinu terena: ")
const r = +prompt("Unesite rastojanje terena: ")

const o = 2 * d + 2 * s + 8 * r
console.log("Treba nam " + o + " metara ograde")



if (isNaN(d) || isNaN(s) || isNaN(r)){
    console.log("Niste uneli broj")
}
*/


// Osnove o stringovima:

const recenica = "Necemo matematicke zadatke!"
console.log(recenica);
// Pristupanje nekom karakteru ide preko indeksa
// Indeksiranje ide od 0
// Poslednji karakter u stringu ima index (cela duzina stringa - 1)
console.log(recenica[0]);
console.log(recenica[7]);
// Za izracunavanje duzine stringa se koristi length metoda
const duzina = recenica.length
// console.log(recenica.length)
console.log(duzina)
console.log(duzina -1);