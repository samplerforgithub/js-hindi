// const userEmail = " HImanshi" // here this is consider this is true
// const userEmail = "" //here is false
const userEmail = [] //true

if(userEmail){
    console.log("Himanshi");
}
else{
    console.log("ther have no value");
}

// falsy values

// false,0, -0, bigint, 0n, "", null, undefined, NaN

//truthy value

// "0", [], 'false', " ", {}, function(){}(empty fun),

//method of array checki ng 
if(userEmail.length === 0){
    console.log("Array is empty");
}

//object checking method
const emptyobj = {}
if(Object.keys(emptyobj).length === 0){
    console.log("object is empty");
}
//false == 0 (true)
//false =='' (true)
//0 == '' (true)

//Nullish coalescing operator (??):  null, undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 20
val1 = null ?? 20?? 30
// val1 = 10 ?? 20?? 30

console.log(val1);

//Terniary operator

// condition ? true : false

const iceteaprice = 100

iceteaprice <= 80 ? console.log("less than 80") : console.log("more than 80")

