const score = 400
//console.log(score);

//if i want only number datatype
const balance = new Number(400)
//console.log(balance);

//they also have same prototype
//number to string
//console.log(balance.toString().length);
//console.log(typeof balance);

//console.log(balance.toFixed(3));

//precesion value
const otherNumber = 23.34
//console.log(otherNumber.toPrecision(3));

//change inti local type
const hundered = 1000000
//console.log(hundered.toLocaleString('en-IN'));

/****************************MATHS************************ */

console.log(Math);
//prototype
//abs(absolute) convert negaive to positive
console.log(Math.abs(-4));
console.log(Math.round(4.6));
//heigher value
console.log(Math.ceil(4.2));
//floor value means least value
console.log(Math.floor(4.3));

console.log(Math.min(3 , 4, 5, 6));
console.log(Math.max(4,5,6,7,9));

//value lies between 0 and1
console.log(Math.random());
//+1 becoz value always lies not in 0
console.log((Math.random()*10)+1);

const min = 10
const max = 20

console.log((Math.floor(Math.random()*(max-min+1))+min));


