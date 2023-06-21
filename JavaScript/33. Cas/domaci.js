// 1.

function isArray(input){
    return Array.isArray(input)
}

console.log(isArray([1, 2, 3]))
console.log(isArray("Zdravo"))

// function cloneArray(array){
//     return array.slice()
// }
// let originalArray = [1, 2, 3]
// let clonedArray = cloneArray(originalArray)

// console.log(clonedArray)


// 2.
const cloneArr = (arr) =>{
    const array2 = []
    for(let i = 0; i < arr.length; i++){
        array2[i] = arr[i]
    }
    return array2
}
console.log(cloneArr([1,3,5,7,9,11,13]))

// 3.

const firstN = (arr, n = 1) => {
    // if (n === undefined){
    //     return arr[0]
    // } else{
    //     return
    // }
    for ( let i = 0 ; i < n; i++){
        console.log(arr[i])
    }
    return "Kraj!";
}
console.log(firstN([5, 4, 3, 2, 1], 3) )