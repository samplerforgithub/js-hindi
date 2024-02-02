//logic ko separate krne ke liye

const hello=()=>{
    console.log("Hey how are you.")
    return"hi"}
    
    function oneplusavg(x,y){
    return 1+(x+y)/2}
    
    const sum=(p,q)=>{   //arrow function
    return p+q}
    
    let a=1;
    let b=2;
    let c=3;
    let v=hello();
    console.log(v);
    
    console.log("one plus avg of a abd b is":oneplusavg(a,b))
    console.log("one plus avg of b abd c is":oneplusavg(b,c))
    console.log("one plus avg of a abd c is":oneplusavg(a,c))
    console.log(sum(6,7));
    
    
    



//arrow function and THISkeyword
//arrow function is also in work as object means in braces

const user ={        //obj me this keyword used hota hai
    username: "himanshi",
    price: 223,

    welcomeMessage:function(){
    
        // console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}
user.welcomeMessage()
user.usename="sam"
user.welcomeMessage()
// console.log(this);  //empty braces or undefined or inside the node to access



// function chai(){
//     console.log(this);
// }
// chai()  //function me this keyword used nhi hota


//  const chai = function(){
//    let username ="himanshi"
//     console.log(this.username);
// }
// chai() 

//Arrow function keyword, how to use

const chai = () => {
    let name ="himanshi"
    console.log(this.username);
}
chai()

//add of two numbers 1 way
const addTwo = (num1,num2) => {
    return num1+num2
}
console.log(addTwo(3,4));

//implicit function

//2 way to write and use arrow function
// const addTwo = (num1,num2) => num1+num2
console.log(addTwo(3,4));

// 3 way to write and use arrow function
// const  addTwo = (num1,num2) => (num1+num2)
console.log(addTwo(3,4));

// const addTwo = (num1,num2) => ({username:"himanshi"})
// console.log(addTwo(username));