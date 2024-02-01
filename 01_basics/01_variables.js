//js is case sensitive
//letters, digits underscore and $ sign allowed

const accountId = 226452427
var accountEmail="himanshi@gmail.com"
let accountPassword="2565256"
accountCity="jaipur"


//accountId=3 //not allowed

accountEmail="hsjdbu@gmail.com"
accountPassword="65748"
accontCity="nagpur"
var accountName;
//var can redeclared this is not throw error

const author= 'harrry'
// let author=34 // throws error because constant cannot be changed
//never write var declared , write let and const

/*
prefer not to use var becoz of issues in block scope and functional scope*/


console.log(accountId);

console.table([accountId, accountPassword, accountCity, accountEmail,accountName])