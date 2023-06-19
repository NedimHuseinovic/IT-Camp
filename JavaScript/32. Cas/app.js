// Niz(Array) u JavScriptu redstavlja strukturu podataka za skladistenje vise vrednosti
// Dakle, unutar jedne promenljive (jednog niza) mozemo imati vise razlicitih (ili istih) vrednosti.
// Nizovi u JS dozvoljavaju duplikate.
// Nizovi su heterogeni(unutar jednog niza mozemo imati elemente razlicitih tipova)

const niz = ["string", 23, true]
console.log(niz)

// Mozemo prvo samo kreirati niz a nakon toga mu dodeliti elemente

const cars = []
cars[0] = "BMW"
cars[1] = "Mercedes"
cars[3] = "Audi"
// array[index] metoda nam suzi za pristuanje elementu niza
console.log(cars)

// lenght metoda nam vraca brj elemenata nekog niza

console.log(cars.length)

// Promemna vrednosti nekog elementa se moze vrsiti na isti nacin:

cars[2] = "Porche"
console.log(cars)

// Niz mozemo napraviti i preko: 
const cars2 = new Array("Golf", "Skoda", "Volvo")
console.log(cars2)

// Primer zbog kojeg treba izbegavati new Array()
// Napraviti ni od jednog elementa tipa number
const points = [40]
console.log(points)


// Pravi se niz od 40 undefined elemenata.
const points2 = new Array(40)
console.log(points2)

// Zbog jednostavnosti, citanja i brzine izvrsavanja je bolje koristiti [] nacin nego new Array()

const arr = [[1,2,3], new Date(), false, function() {}]
console.log(arr)

// Postoje 2 nacina za proveru da li je neka promenljiva niz:

const num = 3
const fruits = ["apple", "pineapple", "strawberry"]
// 1. Array.isArray
console.log(Array.isArray(fruits))
console.log(Array.isArray(num))

// 2. instanceof Array

console.log(fruits instanceof Array)
console.log(num instanceof Array)

fruits[fruits.length] = "banana"
console.log(fruits)

