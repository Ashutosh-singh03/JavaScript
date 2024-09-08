// ES6

class user{
    constructor(username,email,password){
        this.username=username
        this.email=email
        this.password=password

    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}





// ****** behind the scene ******

function user(username,email,password){
    this.username=username
    this.email=email
    this.password=password
}

user.prototype.encryptPassword=function(){
    return`${this.password}abc`
}

user.prototype.changeUsername=function(){
    return `${this.username.toUpperCase()}`
}

const userOne= new user("ashu","ashu@gmail.com","123")
console.log(userOne.encryptPassword())
console.log(userOne.changeUsername())