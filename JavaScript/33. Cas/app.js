// JS Array metods//

// toString() i join() metode koje konvertuju niz u string

const arr = [1,2,3,4,5]
console.log(arr.toString())

// Join prihvata argument koji predstavlja karakter koji ce se naci izmedju izmedju elemenata
console.log(arr.join(" "))

// push() metoda dodaje novi element na kraju niza
arr.push(10, 11, 120)
console.log(arr)

// pop() metoda brise poslednji element niza

arr.pop()
console.log(arr)

//shift() brise prvi element niza, sviv ostali elementi se  vracaju za jedno mesto

arr.shift()
console.log(arr)

// unshift() metoda dodaje elemnt (vise elemenata) na pocetku niza. 

arr.unshift(1, 32)
console.log(arr)

// delete metoda brise odredjeni element niza

delete arr[arr.length - 1]
console.log(arr)