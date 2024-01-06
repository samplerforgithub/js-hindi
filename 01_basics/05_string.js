const name =" himanshi"
const repocount = 10
//concatenate(but these two method are getting older)
//console.log(name + repocount+ " value");
//console.log(name, repocount, " value");

//now use STRING INTERPOLATION for concatination ${value}(also have to use back ticks (``))

console.log(`My name is ${name} and i have total repository is ${repocount}`);

const gameName = new String('himanshihc')
//find value through indexing
console.log(gameName[0]);
//prototype iss tarah and normal way me bhi use kr sakte hai
console.log(gameName.__proto__);

//find length of string
//console.log(gameName.length);

//string to uppercase
//console.log(gameName.toUpperCase());

//find number to word
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));
//break string
//substring me negative value ko 0 imagine kr leta hai
const newString= gameName.substring(0,4)
console.log(newString);
//slice also work for break string with negative
const anotherString =gameName.slice(-8,4)
console.log(anotherString);

//for unwanted space
const newStringOne = "   himanshi   "
console.log(newStringOne);

//remove unwnted whitespace
console.log(newStringOne.trim());

//replace 
const url = "https://hitesh.com/hitesh%20chaoubnm"
console.log(url.replace('%20','-'));
// search used word
console.log(url.includes('hitesh'));
console.log(url.includes('himanshi'));

// string split

const gameChanger = new String('himanshi-hc-com')
console.log(gameChanger.split('-'));

console.log(gameChanger.bold());
console.log(gameChanger.anchor("myanchor"));

let str1 = "Himanshi"
let str2 ="Singh"

console.log(str1.concat(' ',str2));
console.log(str2.concat(' ',str1));
