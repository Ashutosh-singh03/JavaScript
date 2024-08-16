const userLoggedIn=true

// if(2=="2"){
//     console.log("executed")
// }


// const temperature=41
// if(temperature <50){
//     console.log("temperature is less than 50")
// }
// else{
//     console.log("temperature is greater than 50")

// }
// console.log("Executed")



// const score=200
// if(score>100){
//     const power="Fly"
//     console.log(`you can : ${power}`)
// }
// console.log(`you can : ${power}`)


// const balance=1000

 // if(balance>500) console.log("good"),console.log("great");// this is implicit scope

// if(balance<500){
//     console.log("balance is less than 500")
// }
// else if(balance<750){
//     console.log("balance is less than 750")
// }
// else if(balance<900){
//     console.log("balance is less than 900")
// }
// else{
//     console.log(`your balance is ${balance}`)
// }


const userloggedIn=true
const debitCard=true
const loggInFromgoogle=false
const loggInFromemail=true

if(userloggedIn && debitCard){
    console.log("allow to buy course")
}
 if(loggInFromgoogle || loggInFromemail){
    console.log("user logged In")
}