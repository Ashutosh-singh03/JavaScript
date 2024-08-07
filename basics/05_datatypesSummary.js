//primitive 

// 7 types=> string number boolean undefined null BigInt symbol

const score=100
const scoreValue=100.3
const isLofggedIn=true
const temperature=null //it means not decided right now 
let userEmail

const id=Symbol('123')
const anotherId=Symbol('123')
// console.log(id===anotherId)



// refrence (Non-primitive)

// Array, objects ,Functions

const heroes=["shaktiman","doga","loki"];
let marks={
    name:"Ashu" ,
    age:20

}

const myfunction=function(){
    console.log("hello world");
}



//***************************memory **************************** */

// stack(primitive ) it get copy of value & Heap(NON-primitive) it get reference

let myName="ashutosh"
let anotherName=myName
anotherName="rushal"
console.log(myName)


let userOne={
    email:"ashu@gmail.com",
    id:223444
}
let userTwo=userOne
 userTwo.email="rushal@gmail.com"
 console.log(userOne)
 console.log(userTwo)