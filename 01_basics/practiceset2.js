//Q.1 use logical operator to find whether the age of a person lies between 10 and 20

let a= prompt("what is your age?")
a= Number.parseInt(a)
if(a>=10 && a<=20)
{ console.log("Age belongs between 10 and 20")}
else{ console.log("not")}


//Q.2 demonstrate the use of switch case statement in javascript

let s= "banana"
switch(s)
{ case papaya: console.log("papaya is good and delicious fruit");
break;
case grapes: console.log("grapes is my favourite fruit");
break;
case banana: console.log("Banana is National fruit");
break;

default:console.log("NOt fruit");
}

//Q.3 write a javascript program to find whether a number is divisible by 2 and 3.

let num= prompt("what is your age?") // prompt only use on browser
num= Number.parseInt(num)
if(num%2==0 && num%3==0)
{ console.log("YOur number is divisile by 2 and 3");}
else{console.log("your number is nnot divisible by 2 and 3");}

//Q.4 Write a javascript program to find whether a number is divisible by either 2 or 3.

let num= prompt("what is your age?") // prompt only use on browser
num= Number.parseInt(num)
if(num%2==0)
{ console.log("YOur number is divisile by 2");}
else if(num%3==0){
console.log("number is divisible by 3")};

else{console.log("your number is not divisible by 2 or 3");}

//Q.5 Print "you can Drive" or "you cannot Drive" based on age being greater than 18 using ternary operator

let a= prompt("what is your age?")
a= Number.parseInt(a)
console.log(a>18? "you can Drive" : "you cannot Drive")
or
let age=12
let a= age>18? "you can drive" : "you cannot drive"
console.log(a);