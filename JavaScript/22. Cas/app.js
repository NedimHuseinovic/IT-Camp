const firstAndLastWord = (sentence) => {
    const arr = sentence.split(" ")
    const firstWord = arr[0]
    const lastWord = arr[arr.length - 1]
    const B = `${firstWord} ${lastWord}`
    // return firstWord + " " + lastWord
    // return firstWord.concat(" ",lastWord) 
    return B
}

console.log(firstAndLastWord("Svuda podji, kuci dodji"))


function firstSix(sentence, N){
    if(N > sentence.length){
        return sentence
    } else {
        return sentence.substr(0, N)
    }
}
console.log(firstSix("Pera ima devojku", 7))



function podstring(M, N, string){
    let rec = string.substr(N, M);
    return rec
}
console.log(podstring(6, 9, "Pera ima devojku"))


const newString = (A, Z) => {
    let noviString = ""
    let i = 0
    while(i < A.length){
        if(A[i] !== "a"){
            noviString += A[i]
        }
        i++
    }
    return noviString;
}

console.log(newString("Madagaskar", `a`))
console.log(newString("Madagaskar", `a`))