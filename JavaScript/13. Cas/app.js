const recenica = prompt("Unesite neku recenice: ");
let recenica2 = ""
for (let i = 0; i < recenica.length; i++ )
    if (recenica[i] === "a" && recenica[i+1] === "n"){
    recenica2+= "d"
    }

    else if (recenica[i] === "a"){
        recenica2 += "t"
    } else{
        recenica2 += recenica[i]
    }

console.log(recenica2)