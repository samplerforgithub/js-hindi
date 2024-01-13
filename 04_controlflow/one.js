// <, >, <=, >=, ==, !=, ===, !==
//if
//syntax  if(){

// }else{

// }

const temp = 40
// if(temp >50)
if(temp ===40){ // strict check, this is also check datatypes
    console.log("less than 50");
}
else{
    console.log("greater than 30");}
//scope is in only {}

const score = 200
if (score>100){
     const power = "fly"
    // let power ="fly"
    // var power = "fly"// this in not good this access outside part
    console.log(`user power: ${power}`);
}
//  console.log(`user power:${power}`); // power is in inside if so this is not gonna access

 //implicit scope, aak hi line me sare code

 const balance = 1000

 if(balance>100) console.log("executed"),console.log("not executed");
 
 //*********NESTED LOOP */

 const balanceone = 2000
if(balanceone < 1000){
    console.log("smaller than 2000");
 }
 else if(balanceone == 1000)
 {
    console.log("not equal to 2000");
 }
else
{
    console.log("correct");
}
 

const userLoggeedIn = true
const debitcard = true
const loggedInfromgoogle = false
const loggedInfromemail = true

if(userLoggeedIn && debitcard && 2===2){
    console.log("allow to buy courses");
}

if(loggedInfromemail || loggedInfromgoogle){
    console.log("user logged in");
}