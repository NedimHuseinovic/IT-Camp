const NZD = (num1, num2) => {
    const manji = num1 > num2 ? num2 : num1
    let NZD = 1
    for (let i = manji; i >= 1; i--){
        if(num1 % i === 0 && num2 % 1 === 0){
            NZD = i
            break
        }
    }
    return NZD
}

console.log(NZD(6,4))


const NZS = (br1, br2) => {
    const veci = br1 > br2 ? br1 : br2
    let NZS = veci
    let i = veci
    while (true){
        if(i % br1 === 0 && i % br2 === 0){
            NZS = i
            break
        }
        i++
    }
    return NZS
}
console.log(NZS(35, 2))
