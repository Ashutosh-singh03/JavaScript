let number1=100
// console.log(number1)
let number2=new Number(400)
// console.log(number2)

// console.log(number2.toString().length)
// console.log(number2.toFixed(2))

const anotherNumber=23.89765
const anotherNumber2=123.89765//we had set the value precision upto 3 element
// console.log(anotherNumber.toPrecision(3))
// console.log(anotherNumber2.toPrecision(3))


const hundred=1000000
// console.log(hundred.toLocaleString('en-IN'))//convert number to indian number system by applyying comas



// ********************************  maths  ************************

// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(4.6))
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.6))
// console.log(Math.max(4,6))
// console.log(Math.min(4,6))

// console.log(Math.random())
// console.log(Math.random()*10)
// console.log((Math.random()*10)  + 1)
// console.log(Math.floor(Math.random()*10)  + 1)// it round of to its lowest value


const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1)+min))
