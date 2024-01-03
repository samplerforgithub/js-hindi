//let score = 33
//let score = "33"
//let score = "33ans"
//let score =null
//let score =undefined 
let score = true
//let score = "string"



//console.log(typeof score);
//console.log(typeof(score));

//conversion in number

let valueInNumber = Number(score)
//console.log(valueInNumber);
//console.log(typeof(valueInNumber));

// "33" => 33
// "33abs" => NaN (not a number)
// true =>1; false=>0

//let isLoggedIn = 1
//let isLoggedIn = null
let isLoggedIn="himanshi"

//conversion in boolean
let booleanIsLoggedIn= Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

//1 => true
//" "=>false
//"himanshi"=>true

let someNumber=33

// conversion in string

let stringNumber= String(someNumber)
//console.log(stringNumber);
//console.log(typeof stringNumber);

/**********************OPERATION**************************/

let value = 3
let negvalue = -value
//console.log(negvalue);

//BASIC OPERATION
//console.log(2+2);
//console.log(2-2);
//console.log(2*2);
//console.log(2**2); (power 2**3)
//console.log(2/2);
//console.log(2%2);


//string concatination

let str1 = "hello"
let str2 = " himanshi"

let str3 = str1 + str2
console.log(str3);

//problem arise in some type 

//console.log("1" + 2);
//console.log(1+"2");
//console.log("1"+2+2)// 122(because of some guideline)
//console.log(1+2+"2")// 32(no reason)
//console.log((3+4)*5%3)//if you write this type of code so use parenthesis otherwise dont write messy code

//console.log(+true);
//console.log(true+);//error(avoid it)

let num1, num2, num3
//num1=num2=num3=2+2( never write messy code)

let gameCounter = 100
//gameCounter++;/ ++gameCounter;(prefix and postfix prescedence)
console.log(gameCounter);
