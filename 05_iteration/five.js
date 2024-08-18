// for each loop
const arr=["Js","cpp","html","java","Rb","css","sql"]

arr.forEach(function (val){
    // console.log(val)
})

arr.forEach((item)=>{
    // console.log(item)
})


// function print(val){
//     console.log(val)
// }
// arr.forEach(print)



// arr.forEach((val,index,arr)=>{
//     console.log(val,index,arr)
// })



const myArr=[
    {
        languageName:"java",
        extension:"java"
},
    {
        languageName:"javaScipt",
        extension:"js"
},
    {
        languageName:"c plus plus",
        extension:"cpp"
}
]
myArr.forEach(function(val){
    console.log(val)
})
myArr.forEach(function(val){
    console.log(val.languageName)
})