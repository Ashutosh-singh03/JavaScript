const myNumbers=[1,2,3,4,5,6,7,8,9,10]






// const numbers=[]
// const mynum=myNumbers.forEach((item)=>{
    //     let numy=item+10
    //      numbers.push(numy)}
    //     )
    // console.log(numbers)
    
    
    // const nums=myNumbers.map((val)=>{return val+10})
    // console.log(nums)

    // chaining of map and filter
    const num=myNumbers.map((val)=> val*10).map((val)=>val+1)
    console.log(num)
    const nums=myNumbers.map((val)=> val*10).map((val)=>val+1).filter((val)=> val>40)
    console.log(nums)