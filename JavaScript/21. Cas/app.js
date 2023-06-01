var b= 7
let a = 4
const c = 9

/* Cesto u literaturi cemo naici na tvrnju da je javascript interpreterski jezik, ali to nije bas tako.
U pozadini posstoji JS masina koja vrsi pozadinsko kompajliranje pre izvrsanjavanja koda.
Stoga nije pogresno reci da je JS kompajliran jezik. */

// Pojam hoisting u JavaScriptu predstavlja izvlacenje svih deklaracija na vrhu skripte (fajla)

d = 11

console.log(d)

// Kasnije dklariranje neke promenljive je moguce preko var keyword, dok preko let i const nije dozvoljeno..



var d;
// let d;
// const d;


// Ispisati da li u unetom stringu ima v ise v elikih ili malih slova.

const zadatak = (recenica) => {
    let brojac = 0
    for ( let i = 0; i < recenica.length; i++){
        if (recenica[i] >= "a" && recenica[i] <= "z"){
            brojac ++
        }
    
} let brojac2 = 0
for ( let i = 0; i < recenica.length; i++){
    if (recenica[i] >= "A" && recenica[i] <= "Z"){
        brojac2 ++
    }
}
if(brojac > brojac2){
    return "U stingu ima vise malih slova"
} else if (brojac < brojac2){
    return "U stringu ima vise velikih slova"
}
else{
    return "U stringu je podjednak broj i velikih i malih slova"
}
}

console.log(zadatak("Treba imati VISE malih slova"))
console.log(zadatak("Treba imati VISE VELIKIH SLova"))
console.log(zadatak("Treba imati PODJEDNAK broJJ "))
console.log(zadatak("Treba imati PODJEDNAK broJJ "))
