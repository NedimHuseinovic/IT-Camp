const prom1 = "Sta ako zelimo da se data recenica ispise u \n dva odvojena reda"
console.log(prom1)


const prom2 = "Sta ako zelimo da se data recenica ispise u dva odvojena reda kada kucamo, \
ali njen prikaz ce izgledati u jednom redu."
console.log(prom2)



// const prom3 = "Sta ako zelimo da se data recenica ispise u dva odvojena reda kada kucamo, 
// ali njen prikaz ce izgledati u jednom redu.\
// dksalfafa"
// console.log(prom3)

let br1 = 7
let br2 = 13
let zbir = br1 + br2
// console.log("Zbir brojeva " + 7 + " i " + 13 + " je " + (br1 + br2))
console.log("Zbir brojeva " + 7 + " i " + 13 + " je " + zbir)

// Resenje preko back-ticks

console.log(`Zbir brojeva  ${br1} i ${br2} je ${br1 + br2}`)

// Zapisivanje navodnika se vrsi bez ikakvnih problema kroz back-ticksa sintaksu.

// Zapisivanje stringa u vise redova je ispravna sintaksa kroz back-ticks navode.

let recenica = "Zelimo zameniti rec 'promenljivo' sa recju 'lepse'"

// // Replace() metoda menja specfican karakter ili niz karaktera nekimm drugim (koji saljemo kroz drugi arguent)

console.log(recenica.replace("promenljivo", "lepse"))

let recenica2 = recenica.replace("promenljivo", "lepse")
console.log(recenica)

let recenica3= "Zelimo zameniti rec 'promenljivo' sa recju 'lepse'. Sta ako se rec promenljivo, \
nadje na jos jednom mestu"

let recenica4 = recenica3.replace("promenljivo", "lepse")
console.log(recenica4)

// Metoda replace menja samo prvi pronadjeni argument u datom stringu.
// Medjutim, koriscenjem regular expression mozemo zamniti dati argument gde god se nadje u novom stringu
// Sintaksa:


// Regular expression g (global) menja sve rece u stringu sa nekom novom


let recenica5 = recenica3.replace(/promenljivo/g, "lepse")
console.log(recenica5)

// Regular expression i (insensitive) menja sve rece u stringu sa nekom novom bez obzira na njen zapis 
// (bilo da je ispisana velikim ili malim slovom)


let recenica6 = "Zelimo zameniti rec 'PromenljivO' sa recju 'lepse' . Sta ako se rec promenljivo \
nadje na jos jednom mestu"

let recenica7 = recenica6.replace(/promenljivo/gi, "lepse")
console.log(recenica7)


// ToUpperCase() metoda pretvara ceo string u velika slova, bez obzira na to kako je prethodno
// ispisan i koliko ima karaktera

console.log("Data recenica treba biti ispasana velikim slovima".toUpperCase())




// ToLowerCase() metoda pretvara ceo string u velika slova, bez obzira na to kako je prethodno
// ispisan i koliko ima karaktera

console.log("Data recenica treba biti ispasana malim slovima".toLowerCase())


// concat() metoda spaja dva ili vise stringova u jedan
// Nismo ograniceni sa slajem argumenata
// Dodavanjem se vrsi onim redosleom kako saljemo argumente
let a = "Prvi deo "
let b = "nase recenice"
let b2 = "."
let c = a.concat(b, b2)
console.log(c)
 NovaRecenica = recenica.replace(/a/g, "B")
        return O"vo je novodobijena recenica".concat(NovaRecenica)
    }a ispitivanje"
// Sve metode vezane za stringove prave novi string, ne vrsi se modifikacija postojeceg.

function myFunc(recenica){
    if(recenica.length > 9){
        const
    }
    else{ nedovoljna z
        return "Recenica je
}fikaciju"))
console.log(myFunc("Nije do"))
console.log(myFunc("Recenica za modi