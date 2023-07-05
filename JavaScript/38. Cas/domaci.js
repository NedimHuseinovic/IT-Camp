// 1.

const upperCase = ["banana", "jagoda", "jabuka"]
const upperCase2 = upperCase.map((element) =>
    element.charAt(0).toUpperCase() + element.slice(1)
)
console.log(upperCase2)


// 2.

const brojevi = [2,4,6]
const brojeviKubni = brojevi.map((element) =>{
    return element **3
})
console.log(brojeviKubni)


// 3.

const brojevi2 = [2,4,6]
const brojeviKvadratniKoren = brojevi.map((element) =>{
    return Math.sqrt(element).toFixed(2)
})
console.log(brojeviKvadratniKoren)

// 4.

const brojevi3 = [-5,4,3,10,14,-5]
const brojeviNegatvni = brojevi3.map((element) =>{
    if(element < 0){
        return element * -1
    }
    else{
        return element
    }
}
)
console.log(brojeviNegatvni)
