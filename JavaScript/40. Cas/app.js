const number = [1,2,3,4,5,6,7,8,9]

const sumEvenNumber = () => {
        return number.filter((num) => num % 2 === 0).map((num) => num * 2 ).reduce((prev, curr) => prev + curr)
}
console.log(sumEvenNumber(number))

const fibonacci = () => {
    const arr = [1,1];
    let i = 2
    while(arr[i-2] + arr[i-1] <= 4000000){
        arr.push(arr[i-2] + arr[i-1])
        i++
    }
    return arr.filter((num) => num % 2 ===0).reduce((prev, curr) => prev+curr)
}
console.log(fibonacci())

const arr1 = [3,"a","a","a",2,3,"a",3,"a",3,2,4,921392019023903933333333333333333333333333]

function mostFrequent (arr){
    let element 
    let brojac = 0
    let brojPojavljivanja = 1
    for(let i = 0; i < arr.length ; i++ ){
        for(let j = 1; j < arr.length; j++){
            if(arr[i] === arr[j]){
                brojac++
            }if(brojac > brojPojavljivanja){
                    brojPojavljivanja = brojac
                    element = arr[i]
                }
        }
        brojac = 0
    }
    return element
}
console.log(mostFrequent(arr1))


// every() Array iterator metoda nam sluzi za proveru da li je svaki element niza prosao test
// Ova metoda vraca boolean.

const godine = [17,22,18,22,19]

const isEveryAdult = godine.every((student) => student > 17)
console.log(isEveryAdult)

// some() Array iterator metoda nam sluzi za proveru da li je bar jedan element niza prosao test
// Ova metoda vraca boolean.

const isSomeAdult = godine.some((student) => student > 17)
console.log(isSomeAdult)