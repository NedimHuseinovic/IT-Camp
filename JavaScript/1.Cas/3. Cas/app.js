// var
var x = 10;
console.log(x);
x = 15;
console.log(x);

var x = 25
console.log(x);

// Sve promenljive koje su definisane preko var keyword je moguce izvrsiti
// redeklaracju (ponovno defininisanje promenljive) i reinicijalizaciju (dodeljivanje nove vrednosti).


// Let
let y = 30;
console.log(y)

y = 15;
console.log(y);

// let y = 35;
// console.log(y);

// Sve promenljive koje su definisane preko let keyword je moguce izvrsiti 
// reinicijalizaciju (dodeljivanje nove vrednosti), ali kada govorimo o istom prostoru (scope)
// nece biti moguca redeklaracija (novo obezbedljivanje memorije u prostoru).

// Let i Const keyword nam obezbejuju block scope (dodatni prostor za definisanje promenljivih)
// Promenljive definisane preko Let ili Const keyword su block scope promenljive. 

{
let y = 35;
console.log(y);
}

console.log(y);

// Dakle u nekm block scopu je moguce izvrsiti i redeklaraciju i reinicijalizaciju

// Const

const w = 18
console.log(w)

// w = 90
// console.log(w)

// Kada govorimo o istom prostoru kod keyworda Const nemoguce je izvrsiti redeklraciju i reinicijalizaciju

{
    const w = 90;
    console.log(w);
}

// Sve karakteriste koje vaze za promenljivu definisanu preko Let vaze i za promenljive definisanje preko 
// Const keyworda, kada govorimo o block scope

const niz = [12, 14 ,16, 18]
// niz = ["bilo", "sta"]
console.log(niz)