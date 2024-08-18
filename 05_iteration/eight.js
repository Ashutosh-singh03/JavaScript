const myArr=[1,2,3]

// const arr=myArr.reduce(function(acc,curr){
//     console.log(`acc:${acc}  curr:${curr}`)
//     return acc+curr
// },0)
// console.log(arr)

// const total=myArr.reduce((acc,currVal)=>acc+currVal,0)// currVal is pointing to current element of array
// console.log(total)




const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const myTotal=shoppingCart.reduce((acc,curr)=> curr.price+acc,0)
console.log(myTotal)