// Number - BROJEVI // 

a = 0.1
b = 0.2
c= a + b

console.log(c)

// Kod realnih  brojeva JavaScript nije 100% tacan

// Svi brojevi u JS pripadaju "number" tipu podataka

// Mnogo veliki ili mali brojevi mogu biti zapisani preko (exponent oznake) e:

let x = 125e5 // 125 * 100.000
console.log(x)
let y = 123e-5
console.log(y) // 123 / 100.000

console.log("100" / "10")
console.log("100h" / "10")

console.log(isNaN("100"))

NaN // je number tipa


// Infinity (-Infinity) je  vrednost u JavaScriptu koja prelazi najveci (najmanji) dozvoljeni broj.
// Infinity (-Infinity) je numberr tipa
// Deljenjem nulom dobijamo Infinity (-Infinity) 
console.log(1 / 0)
console.log(typeof(1 / 0))

// Brojevi kao objekti:
// Brojevi mogu biti definisani kao objekti preko "new" keyword:

let z = new Number(123) // "New" nam uvek daje objekat
console.log(z)

// number i number object ne mogu biti jednaki (zbog razlicitosti tipa)

let w = 250
console.log(z === w)

// JavaScript interpretira brojeve kao hexadecimalne ako im prethodi 0x:

let broj = 0xFF
console.log(broj)
console.log(broj)
