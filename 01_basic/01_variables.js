const accountId = 144553 //cannot be change
let accountEmail = "xyz@gmail.com"  // can be change
var accountPassword = "123545"
accountCity = "Patna" // not is good practice
let accountState;

// accountId = 2 not allowed


accountEmail = "jdjed@gmail.com"
accountPassword="948954895"
accountCity = "Jaipur"

console.log(accountId);

/*
preffer not to usse var
because of use in block scope and functional scope
*/


console.table([accountId,accountEmail, accountPassword,accountCity, accountState])