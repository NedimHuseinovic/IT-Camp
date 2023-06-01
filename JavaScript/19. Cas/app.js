// Search metode:

const recenica = "Danas je lep dan."

// indexOf() metoda nam vraca poziciju karaktera(niz karaktera) koje smo poslali kao argument

// Ako se argument naazi vise puta unutar stringa dobijamo poziciju prvog pojavljivanja tog argumenta

// Ako se argument ne nadje unutar stringa rezultat ce biti -1.

console.log(recenica.indexOf("d"))
console.log(recenica.indexOf("dan"))
console.log(recenica.indexOf("noc"))

// lastIndexOf() metoda nam vraca poziciju poslednjeg pojavljivanja karaktera koje smo poslali kao argument.

console.log(recenica.lastIndexOf("dan"))
console.log(recenica.lastIndexOf("lep"))
console.log(recenica.lastIndexOf("noc"))

// Obe metode prihvataju drugi argument, koji oznacava poziciju od koje pocinje trazenje.
// NAPOMENA: Brojac se ne resetuje, vec krece od broja drugog unetog argumenta

console.log(recenica.indexOf("dan", 12))


// Search() metod takodj vraca poziciju traznog stringa, s tim sto kod ove metode ne mozemo poslati drugi argument

console.log(recenica.search("dan"))
console.log(recenica.search("noc"))

// startsWith() metoda proverava da li neki string pocinje argumentom koji joj saljemo. Vraca boolean(true ili false)
// Opciono mozemo poslati drugi argument koji ce da bude index od kojeg zelimo traziti poziciju nekog stringa.

console.log(recenica.startsWith("danas"))
console.log(recenica.startsWith("je", 6))

// endsWith() metoda proverava da li neki string zavrsava argumentom koji joj saljemo. Vraca boolean(true ili false)
// Opciono mozemo poslati drugi argument koji predstavlja ukupnu duzinu naseg stringa

console.log(recenica.endsWith("danas"))
console.log(recenica.endsWith("dan."))

console.log(recenica.endsWith("dan", 15)) //false
console.log(recenica.endsWith("dan.", 17)) //true

const deoStringa = (string, pocetak, kraj) =>{
    // return string.slice(pocetak, kraj + 1)
    return string.substr(pocetak, kraj + 1 - pocetak) //drugi nacin
}
console.log(deoStringa("Hello, World", 7, 11))
console.log(deoStringa("Hello, World", 7, 11))





