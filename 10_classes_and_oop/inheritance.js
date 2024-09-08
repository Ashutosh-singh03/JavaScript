class user{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`user name is ${this.username}`)
    }
}


class teacher extends user{
    constructor(username,email,password){
       
        super(username)
       
        this.email=email
        this.password=password
    }

    addCourse(){
        console.log(`value added course  added by ${this.username}`)
    }
}

const chai= new teacher("chai","chai@.com","123abc")
// chai.addCourse()

const tea=new user("tea")
tea.logMe()
chai.logMe()

// console.log(chai===tea)

console.log(chai instanceof teacher)
