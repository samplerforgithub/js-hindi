// primitive
// 7 categories:-  String, Boolean, Number, null, undefined, Symbol, BigInt

// Javascript is a dynamically typed.

//declaration of number, isme point ko special role nhi diya hai wo bhi number mehi aate hai
const score = 100
const scorevalue = 100.3

//declaration of Boolean
const isLoggedIn = false

//declaration of null
const outsideTemp = null

//declaration of userdefined
let userEmail;
console.log(userEmail);

// declaration of symbol, agar number same bhi hai to kio issue nhi hai symbol sare number ko unique batata hai
const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id === anotherid);

// declaration of bigint
const bigNumber = 127534864545439568565768695876n
console.log(typeof bigNumber);


// Reference (Non primitive)
// array, Objects, Functions

// declaration of array
const heros = ["saktiman", "papa", "army"]

// declaration of object
let myObj = {
    name: "himanshi",
    age : 20
}

// function ko variable ke jaise bhi declare kr sakte hai
const myFunction = function(){
    console.log("hello everyone");
}
/*Return type of variables in javascript
1) primitive Datatypes
Number=> number
String => string
Boolean => boolean
null => object
undefined => undefined
Symbol => symbol
Bigint => bigint


2) Non-primitive Datatypes
Arrays => object
Function => function
Object => object
*/