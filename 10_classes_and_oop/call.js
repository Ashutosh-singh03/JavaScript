function setUserName(username){
    this.username=username
}


function createUser(username,email,password){
    setUserName.call(this,username)

    this.email=email
    this.password=password

}

const chai=createUser("ashu","ashu@.com","abc123")
console.log(chai)