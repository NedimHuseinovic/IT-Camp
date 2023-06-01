// Za ekstraktovanje (uzimanje jednog karaktera) mozemo iskoristiti jedan od 3 nacina:

/* charAt(index) metoda uzima jedan argument (argument predstavlja index) i vraca 
nam karakter koji uzima tu poziciju */

/* charCodeAt(index) metoda uzima jedan argument (argument predstavlja index) i vraca 
nam kod karaktera koji uzima tu poziciju */

// string[index] nacin pristupa nekom karakteru iz stringa.

let recenica = "Recenica za uzimanje karaktera."
console.log(recenica.charAt(4))
console.log(recenica.charCodeAt(4))
console.log(recenica[4])

console.log(recenica.charAt(100)) //rezultat karaktera koji ne postoje daje " "
console.log(recenica[100]) // rezultat karaktera koji ne postoji daje undefined


// Za ekstraktovane (uzimanje nekoliko karaktera) mozemo iskoristiti jednu od 3 metode:

/* Slice() metoda nam vraca deo stringa. Ona ima dva argumenta, prvi argumen je pocetni index za uzimanje isecka,
drugi argument je index do kojeg idemo.
DRUGI ARGUMENT SE NE UKLJUCUJE  */
// Drugi argumnt nije obavezan. Ako ga izostavimo, dobicemo string od prvog argumenta do kraja
// Slice() omugucava koriscenje negativnih indeksa.


console.log(recenica.slice(12, 20));
console.log(recenica.slice(12));
console.log(recenica.slice(-10, -1))

/* Substring() metoda nam vraca deo stringa. Ona ima dva argumenta, prvi argumen je pocetni index za uzimanje isecka,
drugi argument je index do kojeg idemo. Ova metoda ne podrzava negarivne indekse */

console.log(recenica.substring(12, 20));
console.log(recenica.substring(12));


/* substr() metoda nam vraca deo stringa. Ona ima dva argumenta, prvi argumen je pocetni index za uzimanje isecka,
drugi argument je duzina tog isecka */

console.log(recenica.substr(3, 10))

// split() metoda nam sluzi da neki string pretvorimo u niz od jednog ili vise elemenata


/* Ako split metodu primenimo na neki string  bez argumenata, dobicemo niz od samo jednog 
elementa (cela recenica je taj element) */


console.log(recenica.split())

// Slanje nekog argumenta znaci da taj argument predstavlja karakter gde ce se deliti elementi niza.

console.log(recenica.split(" ")) // Svaka rec predstavlja jedan element niza

console.log(recenica.split("")) // Svaki karakter predstavlja jedan element niza

console.log(recenica.split("*")) // Dobili smo niz od jednog elementa (cela recenica)

function najduzaRec(string){
    const nizReci = string.split(" ");
    let najduzaRec = nizReci[0]
    for(let i = 0; i < nizReci.lenght; i++){
        if(nizReci[i].lenght > najduzaRec.lenght){
            najduzaRec = nizReci[i]
        }
    }
    return najduzaRec
}

console.log(najduzaRec(recenica))
console.log(najduzaRec(recenica))