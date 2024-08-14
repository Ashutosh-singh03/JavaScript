// Imediately Invoked Function Expression
// TO PROTECT IT FROM GLOBAL SCOPE POLUTTION WE WRITE IIFE

// ()();
//(function declaration )(function call);  


(function chai(){
    console.log("DB CONNECTED")
})();


//this is arrow function
((name)=>{
    console.log(`DB CONNECTED SUCESSFULLY, ${name}`)
})("Hitesh");