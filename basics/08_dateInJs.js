// Dates

let myDate=new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)
// let myNewDate=new Date(2023,0,23)
// let myAnotherDate=new Date(2024,9,24,5,30)
// let mycreatedDate=new Date("03-23-2023")
// console.log(mycreatedDate.toLocaleString())
// console.log(myNewDate.toDateString())

// console.log(myAnotherDate.toLocaleString())



let myTimeStamp=Date.now()// it gives mili second of date
// console.log(myTimeStamp)
// console.log(Math.floor(Date.now()/1000))//it converts it to seconds

let newDate=new Date()
// console.log(newDate)
// console.log(newDate.getDay())// it gives day(mon,tue,wed ...) in number
// console.log(newDate.getMonth())// it gives month based on 0 indexing


 console.log(newDate.toLocaleString('default',{
    weekday:"long"
}))