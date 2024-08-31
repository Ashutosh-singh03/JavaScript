// resolve: This function is called when the asynchronous operation is successful. It changes the state of the promise from "pending" to "fulfilled" and passes the result of the operation to the then method.

// reject: This function is called when the asynchronous operation fails. It changes the state of the promise from "pending" to "rejected" and passes the reason for the failure (usually an error message) to the catch method.

const promiseOne=new Promise(function(resolve,reject){


    setTimeout(function(){
        console.log('async task is complete')
        resolve()
    },1000)

})
promiseOne.then(function(){
    console.log("completed")
})

new Promise(function(resolve,reject){

    setTimeout(function(){
        console.log("async is completed")
        resolve()
    },1000)
}).then(function(){
    console.log("async 2 is done")
})

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"chaiwala@.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user)
})


const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:"hitesh",email:"ashu@.com"})
            // If resolve("Operation was successful!") is called, the promise is fulfilled, and the code inside then is executed.
        }
        else{
            reject("errorr: something went wrong")
            // If reject("Operation failed!") is called, the promise is rejected, and the code inside catch is executed.
        }
    })
})

promiseFour
.then(function(user){
    console.log(user)
    return user.username
})
.then(function(username){// it take value what above then has returned
    console.log(username)
})
.catch(function(err){
    console.log(err)
}).finally(() =>console.log("the promise is resolved either rejected"))



const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:"hitesh",email:"ashu@.com"})
        }
        else{
            reject("errorr: something went wrong")
        }
    })
})
async function consumePromiseFive(){
    // An async function is a function that returns a promise.
// You can use the await keyword inside an async function to wait for a promise to resolve.
    try {
        const response=await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}


// async function getAllUsers(){
//      try {
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
//         const data=await response.json()
//         console.log(data)
//      } catch (error) {
//         console.log("E: ",error)
//      }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})