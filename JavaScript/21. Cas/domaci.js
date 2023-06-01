// 1.
const first = (recenica) => {
    if (recenica.includes("skola")){
        return recenica.indexOf("skola");
        } else if(recenica.startsWith("Automobil")){
            return true
        } else if (recenica.length % 2 === 0){
            return recenica.match(/kuca/g).length 
        } else {
            return recenica.length
        }
}
console.log(first("koja se skola podrazumeva?"));
console.log(first("Automobil na prodaju"));
console.log(first("parna recenica kuca "));
console.log(first("parna recenica kuca"));

const second = (recenica) => {
    let brojac = 0
    for ( let i = 0; i < recenica.length; i++){
        if (recenica[i] >= "a" && recenica[i] <= "z"){
            brojac ++
        }
    }
    return brojac
}

console.log(second("Koliko ima MALIH SLOVA?"))
console.log(second("Koliko ima MALIH SLOVA?"))





