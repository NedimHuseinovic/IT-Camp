const celaGrupa = ["Emir", "Selver", "Asija", "Dzana", "Ajsa", "Nedim"]

//slice( vraca deo niza(onoliko koliko smo trazili argumenata)

console.log(celaGrupa.slice(0, 2))
console.log(celaGrupa.slice(-4, -2))
console.log(celaGrupa.slice(3))

// splice() metoda je se moze koristiti za dodavanje novih elemenata u nizu, brisanje
// i sve mozemo vrsiti na zeljenim ozicijama unutar niza

celaGrupa.splice(2, 0, "Merjem")
console.log(celaGrupa)

//Prvi argument metode predstavlja poziciju u nizu odakle zelimo promenu, drugi argument sluzi za odabir
// koliko argumenata brisemo krenuvsi od pozicije prvog argumenta
// Svi sledeci argumenti predstavljaju nove elemente u nizu

celaGrupa.splice(2, 4)
console.log(celaGrupa)
celaGrupa.splice(0, 0, "Asija", "Dzana", "Ajsa")
console.log(celaGrupa)
celaGrupa.splice(3,0, "Ajla")
console.log(celaGrupa)
celaGrupa.splice(-3, 1, "Rifat")
console.log(celaGrupa)

// sort() metoda vrsi sortiranje niza po abecedi

celaGrupa.sort()
console.log(celaGrupa)

// reverse() metoda sortira niz od poslednjeg ka prvom nizu

celaGrupa.reverse()
console.log(celaGrupa)

const brojevi = [3, 4, 99, -99, 23, 32]
brojevi.sort()
console.log(brojevi)

//
brojevi.sort(function(a, b) {
    return a - b
});
console.log(brojevi)

brojevi.sort(function(a, b) {
    return b - a
});
console.log(brojevi)

// sortiranje niza u random redosledu

brojevi.sort(function() {
    return 0.5 - Math.random()
});
console.log(brojevi)