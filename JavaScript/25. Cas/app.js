// number metode:

// toString() metoda vraca string (broj tipa string)
//Ova metoda se moze primeniti na bilo koji tip podataka.

let x= 144
let y= x.toString();
console.log(y)
console.log(typeof(y))

// toString() metoda vraca string broj zaokruzen na onoliko decimala koliki je argument poslat metodi.
// Dobijena vrednost je tipa stringa

z = 122.218641274612
console.log(z)
let broj = z.toFixed(2)
console.log(broj)

// toPrecision() vraca broj sa ukupnim brojem cifara koliki je argument poslat metodi.
// Dobijena vrednost je string 

let broj2 = z.toPrecision(4)
console.log(broj2)


function Test(mat1, prog1, mat2, prog2){
    if(mat1 + prog1 > mat2 + prog2){
        return 1
    } else if (mat1 + prog1 < mat2 + prog2){
        return 2
    }
    else if(mat1 + prog1 === mat2 + prog2 && prog1 > prog2){
        return "Pobednik je takmicar broj 1 zbog veceg broja poena na test iz programiranja"
    }
    else{
        return  "Pobednik je takmicar broj 2 zbog veceg broja poena na test iz programiranja"
    }
    
}
console.log(Test(40,20,30,20))
console.log(Test(40,10,40,20))
console.log(Test(30,50,40,40))
console.log(Test(60,20,50,30))