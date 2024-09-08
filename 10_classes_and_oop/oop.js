const user={
    username:"hitesh",
    logginCnt:9,
    getUserDetail:function(){
        // console.log("Got user detail")
        console.log(`username: ${this.username}`)
        
    }
}
console.log(user.username)
console.log(user.getUserDetail())
console.log(this)


function User(username,logginCnt,IsloggedIn){
    
    this.username=username;
    this.logginCnt=logginCnt;
    this.IsloggedIn=IsloggedIn;

    const greeting=function(){
        console.log(`welcome : ${this.username}`)
    }
    
    return this;// it's optional js will implicitly return this
}

// const userOne=User("hitesh",2,true);
// const userTwo=User("ashu",3,false);// we haven't printed userTwo still it showing in answerr because it overwrite the function that's why we use "new" keyword


const userOne=new User("hitesh",2,true);// new creates a copy of function
const userTwo= new User("ashu",3,false);
console.log(userOne)
console.log(userTwo)

// step-1 : new object creates
// step-2 : constructor function call due to new keyword
// step-3 : every argument you have wrote will get injected in it