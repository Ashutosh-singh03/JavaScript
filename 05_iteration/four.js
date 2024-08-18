const myObject={
    cpp:"c++",
    js:"javascript"
    ,
    swift:"swift by apple"
}
for (const k in myObject) {//it returns index
//    console.log(`${k} : ${myObject[k]}`)
}

const myArray=["cpp","js","java","Rb","html","css"]
for(const key in myArray){
    console.log(key)//it returns index
}
for(const key in myArray){
    console.log(myArray[key])// it returns value at index
}