const godine = [17,17,21,27,19]
const godine2 = []
godine.forEach((godina)=>
{
    if(godina > 17){
    godine2.push(godina)
}
    // godina > 17 && godine2.push(godina)
})
console.log(godine2)

// filet() metoda pravi novi niz sa onim elementima koji su prosli test

// Novi niz moze biti prazan, iste duzine ili imati manje elemenata od originalnog. Zavisi koliko je
// elemenata proslo test.

// callback funkcija vraca uslov koji neki element treba da zadovoljava kako bi prosla test(dodat u novom nizu)
const godine3 = godine.filter((element) => element > 17 )
console.log(godine3)

function pomocniNiz(arr1,arr2){
    const pomocniNiz2 = arr1.concat(arr2)
    const pomocniNiz3 = pomocniNiz2.filter((element) => element % 2 === 0) dcdcdf      
    pomocniNiz3.unshift(10,20)
    return `First helper: ${pomocniNiz2}
    second helper: ${pomocniNiz3}` 
    
}
console.log(pomocniNiz([1,2,3,4,5,6], [7,8,9,10,11,12]))

const student = ["anastasija","merjem","emir","nedim","asija"]
// const student2 = student.filter((element) => {
//     if (element[1] === "e"){
//         return student
//     }
// })
// console.log(student2)

const student2 = student.filter((student) => student[1] === "e")
console.log(student2)

//  reduce() metoda izvrsava callback funkciju za svaki element jednom i vraca nam jednu vrednost.
// callback funkcija reduce() metode moze imati 4 argumenta: (previousValue, currentValue, index, array)

// const godine = [17,17,21,27,19]

const suma = godine.reduce((prev, curr) => prev + curr)
console.log(suma)


// mozemo dodati pocetnu vrednost, ona predstavlja drugi parametar callback funckije
const suma2 = godine.reduce((prev, curr) => prev + curr, 100)
console.log(suma2)
console.log(suma2)