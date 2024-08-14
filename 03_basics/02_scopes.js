let a = 300// this is global scope
if (true) {// this is block scope
    let a = 30
    let b = 10
    // console.log("Inner a : ",a)
}
// console.log(a)


function one() {
    const username = "hitesh"

    function two() {
        const website = "google"
        // console.log(username)
    }
    // console.log(website)
    two()
}
one()



if(true)
{
    const username="Hitesh"
    if(username==="Hitesh"){
        const website=" google"
        // console.log(username+website)
    }
    // console.log(website)
}
// console.log(username)




// ********************** intresting ******************
console.log(addOne(5))// this will run properly
function addOne(num){
    return num+1
}


// console.log(addTwo(5)) //this will not run because you are holding function in an expression
const add=function addTwo(num){
    return num+2
}