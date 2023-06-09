// Math metode //

// Sintaksa za bilo koju matematicku metodu je sledeca: 
// Math.method(number)

// Number to Integer // 

// Postoje 4 razlicite metode za dobijanje celog broja slanjem broja sa decimalnim zapisom:

// Math.round(x) vraca ceo broj koji je blizi

console.log(Math.round(3.21785421546912));

// Math.ceil(x) vraca sledeci ceo broj

console.log(Math.ceil(3.21785421546912));

// Math.floor(x) vraca prethoni ceo broj

console.log(Math.floor(3.21785421546912));

// Math.trunc(x) vraca ceo broj odstranjujuci decimalni ostatak

console.log(Math.trunc(3.21785421546912));

// Math.sign(x) - metoda vraca:
// 1 ako je x pozitivan broj
// 0 ako je x 0
//-1 ako je x negativan broj

console.log(Math.sign(34))
console.log(Math.sign(-34))
console.log(Math.sign(0))

//Math.pow(x,y) vraca broj x stepenovan brojem y

console.log(Math.pow(34, 2))

// math.sqrt(x) vraca koren broja x

console.log(Math.sqrt(25))

// Math.abs(x) vraca apsolutnu vrednost broja x

console.log(Math.abs(-20))

//Math.sin() vraca sinus (-1, 1) nekog ugla(x) datog u radijanima

console.log(Math.sin(Math.PI))

//Math.cos() vraca kosinus (-1, 1) nekog ugla(x) datog u radijanima

console.log(Math.cos(Math.PI))

function nearestTo100(num1, num2){
    let broj1 = Math.abs (num1 - 100)
    let broj2 = Math.abs (num2 - 100)
    if(broj1 === broj2){
        return "Brojevi su na istoj udaljenosti od borja 100"
    } else if (broj1 > broj2){
        return `${num2} je blizi broju 100 od broja ${num1} `
    } else{
        return `${num1} je blizi broju 100 od broja ${num2} `
    }
}


