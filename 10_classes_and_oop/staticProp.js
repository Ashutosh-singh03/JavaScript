class user{
    constructor(username,password){
        this.username=username
        this.password=password
    }
   logMe(){
    console.log(`username : ${this.username}`)
   }
   static getId(){
        return "123"
    }
}

const userOne= new user("ashu","12345")
// userOne.getId()


class teacher extends user{
    constructor(username,email){
        super(username)
        this.email=email

    }
}

const alpha=new teacher("ashu","ashu@.com")
console.log(alpha.getId())
alpha.logMe()