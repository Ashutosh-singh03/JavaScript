// let array=[5,6,7,8,9]
// for (const arr of array) {
//     console.log(arr)
// }

// let greeting="hello world"
// for (const greet of greeting) {
//     console.log(`each world of greeting is ${greet}`)
    
// }


const map=new Map()
map.set('IN',"India")
map.set('UK',"United kingdom")
map.set('Fr',"France")
map.set('Fr',"France")
// console.log(map)

for(const [key,value] of map){//it returns value 
    console.log(key," :- ",value)
}