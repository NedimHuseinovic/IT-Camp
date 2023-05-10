const IsSunny = true
if(IsSunny === true){
    console.log("Suncano je")
}
else{
}

// Postoji 8 FALSY vrednosti i to su:

//  1. false
//  2. ""
//  3. 0
//  4. -0
//  5. 0n
//  6. Nan
//  7. Undefined
//  8. null

function vreme(){
    const UserInput = prompt("Unesite neku poruku: ")
    if (UserInput){
        return "True"
    }
    else{
        return "False"
    }
}
console.log(vreme())


function broj(){
    const UserInput = +prompt("Unesite neki broj: ")
    if (UserInput){
        return "True"
    }
    else{
        return "False"
    }
}
console.log(broj())


// Trazi se unos od strane korisnika sve dok ne unese bilo sta
let recenica = ""
while(!recenica){
    recenica = prompt("Unesite neku recenicu: ")
}