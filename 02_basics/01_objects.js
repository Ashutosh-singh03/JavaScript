// singleton
// object.create

// object literals

const mySym=Symbol("key1")
const JSUser={
    name:"Ashutosh",
    "full name":"Ashutosh Singh",
    age:20,
    [mySym]:"myKey1",//it's symbol syntax
    location:"Uttar Pradesh",
    email:"ashu@gmail.com",
    isLoggedIn:false,
    lastLoggIn:["saturday","Monday"]
}
// console.log(JSUser.name);
// console.log(JSUser["name"])
// console.log(JSUser.full name)// it will not run so use below method
// console.log(JSUser["full name"])
// console.log(JSUser.mySym)
// console.log(JSUser[mySym])

JSUser.email="ashutosh@google.com"
// console.log(JSUser["email"])
// Object.freeze(JSUser)//we can't change anything in our object after it
JSUser.email="ashusingh@microsoft.com"
// console.log(JSUser)

JSUser.greeting=function(){
    console.log("hello JS user")
}
JSUser.greeting()

JSUser.greetingTwo=function(){
    console.log(`hello JS user,${this.name}`)// to refer to same object we use this 
}
JSUser.greetingTwo()