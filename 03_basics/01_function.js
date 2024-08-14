// console.log("H")
// console.log("I")
// console.log("T")
// console.log("E")
// console.log("S")
// console.log("H")


function sayMyName(){
    console.log("H")
console.log("I")
console.log("T")
console.log("E")
console.log("S")
console.log("H")
}
// sayMyName()

// function addTwoNumber(number1,number2){
//     console.log(number1+number2)
// }
// let result=addTwoNumeber(3,4)
// console.log(result)   // it will print undefined because function is returning nothing
// addTwoNumber(3,4)
// addTwoNumber(3,"4")
// addTwoNumber(3,"a")
// addTwoNumber(3,null)



function addTwoNumber(number1,number2){
    let result=number1+number2;
    return result
    console.log("hitesh")// after returning no code can be executed
}
// let result=addTwoNumber(3,4)
// console.log("Result : ",result)



// function userLoggInMessage(username){
//     if(!username){//  if undefined and empty string
//         console.log("Please enter a username")
//         return
//     }
//     return `${username} is just logged in`
// }
// console.log(userLoggInMessage(""))


function userLoggInMessage(username="sam"){
    if(!username){//  if undefined and empty string
        console.log("Please enter a username")
        return
    }
    return `${username} is just logged in`
}
// console.log(userLoggInMessage())
// console.log(userLoggInMessage("hitesh"))



function calculateCartPrice(val1,val2,...num){
    return num
}
// console.log(calculateCartPrice(200,500,100,1000,2000))


// pass object in function and use it

const user={
    username:"ashu",
    price:999
}
function handleObject(anyobject){
    console.log(`user name is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObject(user)

handleObject({
    username:"Sam",
    price:999
})



//pass array in function

const myNewArray=[100,200,300,400]
function array(getArray){
    return getArray[2]
}

console.log(array(myNewArray))