 const tinderUser={}
 tinderUser.id="abc123"
 tinderUser.email="abc123@gmail.com"
 tinderUser.age="19"
//  console.log(tinderUser)

const regularUser={
    id:"123abc",
    fullname:{
        username:{
            firstname:"ashutosh",
            lastname:"singh"
        }
    }
}
// console.log(regularUser.fullname)
// console.log(regularUser.fullname.username)
// console.log(regularUser.fullname?.username.firstname)


const obj1={1:"a",2:"b",3:"c"}

const obj2={4:"d",5:"e"}

// const obj3={obj1,obj2}

// const obj3=Object.assign({},obj1,obj2)

const obj4={...obj1,...obj2}
// console.log(obj4)

// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty("age"))

const course={
    name:"js in hindi",
    price:"9999",
    courseInstructor:"Hitesh"
}
// course.courseInstructor

// const{courseInstructor}=course
//        or
const{courseInstructor:Instructor}=course
console.log(Instructor)