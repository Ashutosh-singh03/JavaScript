function user(email,password){
    this._password=password
    this._email=email

    Object.defineProperty(this,'email',{
        get:function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email=value
        }
    })
}

const chai=new user("chai@.com","abc")
console.log(chai.email)