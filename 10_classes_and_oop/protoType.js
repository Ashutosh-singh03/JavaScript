// let myName="Hitesh   "
// let myChannel="chai   "
// console.log(myName.trueLength); 

let myhero=["thor","spiderman"]

let heroPower={
    thor:"hammer",
    spiderman:"sting"
}

Object.prototype.hitesh=function(){
    console.log("hitesh is present in all objects");
    
}

Array.prototype.heyashu=function(){
    console.log("ashu says hello");
    
}
// heroPower.hitesh()
// myhero.hitesh()

// heroPower.heyashu()  // this does'nt work because object is superior than arrays and we have defined prototype to arrays and it can't share it with string or anyother which is at its same level or  above level


// myhero.heyashu()


// inheritance


const user={
    username:"chai",
    email:"chai@google.com"
}
const teacher={
    makeVideo:true
}

const teachingSupport={
    isAvailable:false
}

const TASupport={
    makeAssignment:"js Assignment",
    fullTime:true,
    __proto__:teachingSupport
}

teacher.__proto__=user

// modern syntax

Object.setPrototypeOf(teachingSupport,teacher)


const anotherUsername="chaiaurcode       "

String.prototype.trueLength=function(){
    console.log(`${this}`)
    console.log(`true length of string is : ${this.trim().length}`)
}

anotherUsername.trueLength()

"Ashutosh".trueLength()