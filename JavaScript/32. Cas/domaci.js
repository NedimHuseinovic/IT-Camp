/* function calculatedAge(birthYear){
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let age = currentYear - birthYear
    return age
}
console.log(calculatedAge(2004)) */

function countMyAge(birthDateString){
    const birthDate = new Date(birthDateString)
    const currentDate = new Date()
    const birthMiliseconds = Date.parse(birthDate)
    const currentTimeMiliseconds = Date.parse(currentDate)

    const sub = currentTimeMiliseconds - birthMiliseconds   
    const year = new Date(sub).getFullYear() - 1970
    return year 
}

console.log(countMyAge("2004-12-01"))