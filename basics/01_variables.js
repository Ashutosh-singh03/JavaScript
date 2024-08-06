let accountId = 22345; // Changed from const to let
let email = "ashu@google.com";
let password = "ashu123";
let city = "bengaluru";
let accountState

// Reassigning the variables
accountId = 4455;
email = "ashutosh@gmail.com";
password = "ashu1234";
city = "mumbai";
/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.log(accountId);
console.table([{accountId, email, password, city,accountState}]);