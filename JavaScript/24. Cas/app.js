prva()

function prva(){
    console.log("prva")
}


// U prvom slucaju vazi hoisting. Deklarisanje funkcija na vrhu fajla. Stoga ih mozemo pozivati pre definisanja.

druga()
const druga = () => console.log("druga")

// Za arrow funckije ne vazi hoisting. Moramo je definisati pre koriscenja.
