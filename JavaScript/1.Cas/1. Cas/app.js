console.log("Prvi cas JavaScript-a");
console.log("Nova Poruka");

text = document.getElementById("paragraph");
console.log(text);

text.innerHTML = "<em>Hello World<em>"

//Tipovi PODATAKA//


//Postoje 
// 1. primitivni (vrednosti) tipova podataka
// 2. neprimitivni (referentni) tipovi podataka

// Za proveru tipa neke promenljive (varijable) se koristi TYPEOF operator

// Primitivni (vrednosti) tipovi podataka:

//  1. String - promenljiva koja je zapisana unutar navodnika  (obicnih ili duplih)

console.log("neki string")
console.log(typeof "neki string")

//  2. Number - brojevi mogu biti zapisani sa ili bez decimalnog zareza (.)

console.log(56)
console.log(typeof 56)

//  3. BigInt - brojevi koji su iznad ogranicenja za "number" tip podatka.

console.log(BigInt(27141254126512695126953612478152469123129))
console.log(typeof BigInt(27141254126512695126953612478152469123129))

//  4. Boolean - logicki entitet koji ima dve vrednost
// true;
// false;

console.log(true)
console.log(typeof true)

//  5. Undefined - Promenljiva koja je definisa u memoriji ali joj nije dodeljena vrednost
//  tip : undefined 
// vrednost : undefined  

var a;

console.log(a)
console.log(typeof a)

//  6. null - Nepostojeca il nekorektna promenljiva ima vrednost NULL
// Tip promenljie cija je vrednost null u JavaScriptu je object

b = null;

console.log(b)
console.log(typeof b);

// 7. Symbol - Koristi se za promenljive koje su anonimne ili jedinstvene 

c = Symbol("IT Camp")
console.log(c)
console.log(typeof c)

// Svi tipovi podataka koji nisu primitivni su tipa object.
// Promenljive mogu sadrzati vise (od jedne) vrednosti su referentnog (neprimitivnog) tipa

//  1. Array (niz) - Struktura podataka za skladistenje vise vrednosti (mogu biti razlicitog tipa)

niz = ["Emir, 21, true"]
console.log(niz)
console.log(typeof niz)

//  2. Object - Struktura podataka za skladistenje vise vrednosti (mogu biti razlicitog tipa).
// Te vrednosti su prikazane u key:value (name:value) paru

obj = {
 ime: "Emir",
 prezime: "Marukic", 
 punoletan: true
}
console.log(obj)
console.log(typeof obj)



