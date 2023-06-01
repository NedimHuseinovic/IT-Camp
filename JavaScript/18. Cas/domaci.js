function isPalindrom(string){
    let obrnutiString = ""
    for (let i = string.lenght - 1; i >= 0; i--){
        obrnutiString += string[i]
    }
    if (string === obrnutiString){
        return true
    }else{
        return false
    }
}
console.log(isPalindrom("Radar"))
console.log(isPalindrom("Hello"))
console.log(isPalindrom("Hello"))