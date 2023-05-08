let username = ""
while(username.length < 6){
    username = prompt("Unesite ispravan username: ")
    console.log(username, username.length)
}



// DRY

// Funkcije predstavljaju deo koda koji ce se izvrsiti samo kada u slucaju
// njihovog pozivanja. Koristimo ih da bi nas kod bio reusable  (isti kod resava vise problema slicnog tipa).

// Funkciju mozemo napraviti na dva nacina:
//  1. Preko function keyword;
//  2. ARrow function


//  1.
function myFunc(/* parametar */) {
    // Kod unutar funckije
}


//  2.
const myFunc2 = () => {
    // Kod unutar funckije
}

// funckija koja ispisuje zdravo
function greeting() {
    console.log("Zdravo")
}
greeting(/* argument */);

// Prilikom definisanja funkcije mozemo proslediti paramtre koji su neophodni za izvrsavanje koda date,
// funckije.
// Dok prilikom pozivanja funkcije to nije parametar nego argument.


function greeting2(ime) {
    console.log("Zdravo " + ime)
}
greeting2("Nedime");


// Napraviti funkciju koja nam vraca zbir 3 i 5
function sabiranje(){
    const prom1 = 3
    const prom2 = 5
    // kada se izvrsi cela logika funkcije, krajnji rezultat treba vratiti return keyword(rezervisana rec) 
    return prom1 + prom2;
    // Kod koji se nalazi nakon return-a nece se primeniti
}

function zbir(broj1, broj2){
    return broj1 + broj2;
}
console.log(zbir(10,5));


// Za dodeljivanje default vrednosti se moze izvrsiti na dva nacina:

// 1. Nacin
// function zbir(broj1, broj2){
//     if(br2 === undefined){
//         return broj1
//     } else{
//         return broj1 + broj2;
//     }
// }

// console.log(zbir(34))

//  2. 

function zbir2(br1, br3 = 0){
    return br1 + br3;
}

console.log(zbir2(75))
console.log(zbir2(75, 36))