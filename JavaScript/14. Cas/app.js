const ZbirKvadrata = function(a,b){
    if(a === b){
        return "povrsina kvadrata iznosi: " + a * b
    } else{
        return "povrsina pravougaonika iznosi: " + a * b
    }
}

console.log(ZbirKvadrata(4, 5))
console.log(ZbirKvadrata(5, 5))

// Arrow Function
const KvadratBroja = (a) => {
    return a**2;
}
console.log(KvadratBroja(4))

/* Ako ArrowFunction ima samo jedan parametar nije neophodno stavljati ga u zagradama. */


/* Ako funkcija vraca neki jednostavan izraz (prethodno nije bilo dodatnog koda) 
mozemo izostaviti viticaste zagrade i return keyword */

const KvadratBroja2 = a => a**2;
console.log(KvadratBroja2(10))

const unetiBroj = () => {
    let a = prompt ("Unesite neki broj: ")
    if(a > 0){
        return "Unet je pozitivan broj"
    }
    else if(a < 0){
        return "Unet je negativan broj"
    }
    else if(a == 0){
        return "Uneta je Nula"
    }
    else if(isNaN(a)){
        return "Uneta vrednost Nije broj"
    }
}
console.log(unetiBroj())


const email = (sat,minut) => {
    if(sat >= 9 && sat < 17)  {
        return "Da"
    } else{
        return "Ne"
    }
}
console.log(email(9,10))
