// 1. Nacin:
// const recenica = prompt("Unesite neki string: ")
// let brojac = 0
// for ( let i = 0; i < recenica.length; i++){
//     if (recenica[i] === "0" ||
//     recenica[i] === "1" ||
//     recenica[i] === "2" ||
//     recenica[i] === "3" ||
//     recenica[i] === "4" ||
//     recenica[i] === "5" ||
//     recenica[i] === "6" ||
//     recenica[i] === "7" ||
//     recenica[i] === "8" || 
//     recenica[i] === "9"
//     )
//     {
//         brojac++
//     }
// }
// console.log(brojac)


// // 2. nacin
// const recenica = prompt("Unesite neki string: ")
// let brojac = 0
// for (let i = 0; i < recenica.length; i++){
//     if (!isNaN(recenica[i]) && recenica[i !== " "]) {
//         brojac++
//     }
// }
// console.log(brojac);


// 1. 
const recenica = prompt("Unesite neku recenicu: ")
let recenica2 = ""
for (let i = 0; i < recenica.length; i++){
    if (recenica[i] === " "){
        continue;
    } else{
        recenica2 += recenica[i];
    }
}
console.log(recenica2)