function zbirCifara(broj){
    const brString = broj.toString()
    const brNiz = brString.split("")
    let brojac = 0
    for(let i = 0; i < brNiz.length; i++){
        brojac += Number(brNiz[i])
    }
    return brojac
}
console.log(zbirCifara(379))