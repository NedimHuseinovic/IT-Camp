const person = {
    firstName: "Nedim",
    lastName: "Huseinovic",
    age: 18,
    fullName: function(){
        return `${this.firstName} ${this.lastName}`
    }
}
console.log(person.fullName())

// Postoje 3 metode koje mozemo koristiti za izvrasavanje neke funkcie (metode) za odredjeni objekat
// call()
// apply()
// bind()




const person2 = {
    firstName: "Emir",
    lastName: "Marukic",
    age: 22,
}

// Prvo dolazimo do fukncije cije izvrsavanje zelimo, to moze biti funkcija koja predstavlja metodu nekog objekta, a i
// moze biti i funckija koja je definisana u global scope.

// Nakon toga, na tu funkciju primenjujemo call() metodu ciji prvi argument predstavlja objekat a potencijalno drugi,
// treci,... su argumenti glavne funkcije.
console.log(person.fullName.call(person2))

const restoran = {
    specijalitet: "Becka snicla",
    zadovoljstvoGostiju: "zadovoljni",
    lokacija: "Avnoja bb",
}

function poruka(mesto){
    return `Nas vecerasnji specijalitet je bio ${this.specijalitet}. Gosti su bili veoma ${this.zadovoljstvoGostiju}
    Nalazimo se na lokaciji ${this.lokacija} u ${mesto}`
}
console.log(poruka.call(restoran, "Novom Pazaru"))

const restoran2 = {
    specijalitet: "Lovacka snicla",
    zadovoljstvoGostiju: "nezadovoljni",
    lokacija: "Stevana Nemanje, 26",
}
console.log(poruka.call(restoran2, "Beogradu"))


// Prvo dolazimo do fukncije cije izvrsavanje zelimo, to moze biti funkcija koja predstavlja metodu nekog objekta, a i
// moze biti i funckija koja je definisana u global scope.

// Nakon toga, na tu funkciju primenjujemo apply() metodu ciji prvi argument predstavlja objekat a potencijalno drugi 
// argument je niz elemenata (gde svaki element predstavlja argument glavne metode)
console.log(poruka.apply(restoran, ["Beogradu"]))

const bindFunction = poruka.bind(restoran2)
console.log(bindFunction("Sarajevu"))

// const firstName = person.firstName
// console.log(firstName)

const {firstName} = person
console.log(firstName)

const age = 12
const {lastName, age: agee} = person
console.log(agee)