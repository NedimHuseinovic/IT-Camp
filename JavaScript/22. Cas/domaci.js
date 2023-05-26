const rec = "Pera ima devojku"

const third = (recenica) => {
    const prviRazmak = recenica.indexOf(" ")
    const prvaRec = recenica.slice(0, prviRazmak)
    const duzina = prvaRec.length
    return duzina
}

console.log(third("Pera ima devojku"))