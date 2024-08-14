const user={
    username:"Hitesh",
    price:999,
    welcomeMessage: function() {
        console.log(`${this.username} , just logged In`)
console.log(this)
    }
    
}
// user.welcomeMessage()
// user.username="Sam"
// user.welcomeMessage()

// console.log(this)


// function chai(){
//     let username="hitesh"
//     console.log(this.username)
// }
// chai()


// const chai=function (){
//     let username="hitesh"
//     console.log(this.username)
// }
// chai()


const chai =()=>{// arrow function 
    let username="hitesh"
    console.log(this.username)
}
// chai()


// const addTwo=(num1,num2)=>{
//     return num1+num2
// }
// console.log(addTwo(3,5))


// const TwoNum=(num1,num2)=> num1+num2
// TwoNum(3,4)



// const TwoNum=(num1,num2)=> (num1+num2)
// console.log(TwoNum(3,4))


const TwoNum=(num1,num2)=>({username:"hitesh"})
console.log(TwoNum(3,4))