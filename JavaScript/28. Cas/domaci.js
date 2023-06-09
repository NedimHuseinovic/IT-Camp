const nearestTo100 = (num1, num2) =>{
    let firstCounter = 0
    if (num1 < 100){
        for (let i = num1; i < 100; i++){
            firstCounter ++
        }
    } else{
        for (let i=num1 ; i > 100; i--){
            firstCounter++
        }
    }
    let secondCounter = 0
    if (num2 < 100){
        for (let i = num2; i < 100; i++){
            secondCounter ++
        }
    } else{
        for (let i=num2 ; i > 100; i--){
            secondCounter++
        }
    }
    if (firstCounter < secondCounter){
        return `${num1} is nearest to 100 than number ${num2}`
    } else if (firstCounter > secondCounter){
        return `${num2} is nearest to 100 than number ${num1}`
    } else{
        return `They are on equal distance to number 100`
    }
}
console.log(nearestTo100(60, 39))
console.log(nearestTo100(20, 39))
console.log(nearestTo100(20, 20))
console.log(nearestTo100(105, 70))
