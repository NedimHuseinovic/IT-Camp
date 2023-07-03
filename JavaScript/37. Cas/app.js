// Map() metoa krenira novi niz, na nacin da se callback funkcija (argument map metode) 
// izvrsava za svaki element.
// Duzina novodobijenog niza je jednaka duzini orginalnog niza
//map() metoda ne menja originalni niz, vec prai novi.

const brojevi = [2, 4, 6, 8, 10, 12]

const brojevi2 = brojevi.map(function(broj) {
    return broj
})

console.log(brojevi2)

const brojevi3 = brojevi.map((broj) =>{
    let kvadratBroja = broj**2
    return kvadratBroja
})
console.log(brojevi3)

const studenti = [
    "asija",
    "ajla",
    "selver", 
    "nedim", 
    "ajsa", 
    "emir", 
    "merjem", 
    "anastasija"
];

const studenti2 = studenti.map(
    (student) => student[0].toUpperCase() + student.slice(1)
)
console.log(studenti2)

const student3 = studenti.map(function(student, pozicija){
    if(pozicija < 3){
        return student
    }else{
        return 
    }
})
console.log(student3)
// Ako zelimo da iskljucimo neke elemente onda ce se na tim pozicijama dobiti "undefined" 

const brojevi4 = brojevi.map((broj, pozicija) =>{
    if (pozicija === 0 || pozicija === 3 || pozicija === 5){
        return broj ** 2
    }else{
        return broj
    }
})
console.log(brojevi4)



const numbers = [2,7,5,7,17,28,55,34]

const numbers2 = numbers.map((broj, index, arr) =>{
    if(broj % 2 === 0){
        return broj **2
    } else {
        return +((arr[index - 1] + broj + arr[index + 1])/3).toFixed(2)
    }

})
console.log(numbers2)