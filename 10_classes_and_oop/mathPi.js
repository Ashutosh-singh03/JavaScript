const descriptor=Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(descriptor)

const chai={
    name:"ishqiya"
    ,
    isAvailable:true,
    price:250,
    tea:function(){
        console.log("chai is not available")
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"))

// Object.defineProperty(chai,'name',{
//     writable:false, // if it is false you cannot reset it value
//     enumerable:false,// if it is false you can't use loop on which is written as argument 
   


// })

// console.log(Object.getOwnPropertyDescriptor(chai,"name"))


for (let [key,value] of Object.entries(chai)) {
    if(typeof value !=='function'){
    console.log(`${key} : ${value}`)
}}