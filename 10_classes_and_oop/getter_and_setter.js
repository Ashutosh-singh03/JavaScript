class user{
    constructor(email,password){
        this.email=email
        this.password=password
    }

    get password(){
        return `${this._password}ashu`   //toUpperCase()// the value of password is set as it is written but will get uppercase from getter(note;- the variable written after this should be same as getter variable otherwise it will print constructor set value)
    }

    set password(value){
        this._password=value  //can't password instead of _password because then both constructor and setter both will set value of password 
    }
}

const ashu=new user("ashu@gmail.com","abc")
console.log(ashu.password)