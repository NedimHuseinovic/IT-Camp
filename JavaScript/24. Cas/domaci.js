function protectUser(email) {
    const indexUnderLine = email.indexOf("_")
    const indexDot = email.indexOf(".")
    // let indexSymbol;
    // if (indexUnderLine === -1) {
    //     indexSymbol = indexDot
    // } else {
    //     indexSymbol = indexUnderLine
    // }
    const indexSymbol = indexUnderLine === -1 ? indexDot : indexUnderLine
    const indexEt = email.indexOf("@")
    const surname = email.slice(indexSymbol, indexEt)
    return email.replace(surname, "...")
}
console.log(protectUser("robin_singh@example.com"))
console.log(protectUser("robin.singh@example.com"))