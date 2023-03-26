// Operatori u JS

// Postoje 6 vrsta operatora u JS
//  1. Aritmeticki Operatori 
//  2. Operatori dodele vrednosti
//  3. String Operatori
//  4. Operatori poredjenja
//  5. Logicki Operatori
//  6. Tipovni Operatori

//  1. Aritmeticki Operatori

//  + Sabiranje

console.log(10 + 15)

//  - Oduzimanje
console.log(10 - 15)

//  * Mnozenje

console.log(10 * 15)

// ** Stepenovanje
console.log(2 ** 3)

//  / Deljenje
console.log(8 / 2)

//% Modul (Ostatak pri deljenju)
console.log(12 % 5)

// Parni brojevi
// x % 2 = 0
// Neparni brojevi
// x % 2 != 0


//  ++ Increment (povecanje vrednosti za 1)
x = 5
x++ // x = x + 1
console.log(x)

//  -- Increment (smanjnje vrednosti za 1)

y = 5
y-- // y = y - 1
console.log(y)

//  2. Operatori dodele vrednosti

//  = dodeljivanje vrednosti

a = 5

//  += Kada na potojecu vrenost promenljive dodajemo novu vrednost

a += 5 // a = a * 2
console.log(a)

//  -= Smanjenje vrednosti postojece promenljive

a -= 7
console.log(a)

//  -= Mnozenje vrednosti postojece promenljive

a *= 3
console.log(a)

// /= Deljenje postojece vrednosti sa nekim brojem

a /= 3
console.log(a)

//  %= Ostatak
a %= 2 // a = a % 2
console.log(a)

//  **= Stepenovanje postojece vrednosti nekim brojem
a = 5
a **= 3 // a = a ** 3
console.log(a)

// 3. String Operatori
// Pored osnovne namene za sabiranje brojeva, + operator sluzi za spajanje stringova

console.log(4 + 4)
console.log("Dobar" + " " + "Dan")

// Sabiranje broja i string nam daje String
console.log( 5 + "25")
console.log(typeof (5 + "25"))

console.log(25 - "15")

console.log(25 * "15")

console.log(10 / "2")

// Dobijamo NaN (Not a Number)
console.log( 5  + "string")
console.log( 5  * "string")
console.log(typeof (5  * "string"))
// NaN je broj cija  vrednost nije korektna
// Tip NaN je number