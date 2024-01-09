function saymyName(){   // function is a keyword
    // console.log('h');
    // console.log('i');
    // console.log('m');
}
saymyName() // if we write only saymyname then they are return answer withoout (), saymyName(REFERENCE)
saymyName()

//function of add two no.s

function addTwoNumber(num1,num2) //parameters
{
    // console.log(num1+num2);
}
//function is also work like variable
// const result = addTwoNumber(3,4)
// console.log("Result:",result);

//second method of above code
function addtwonumber(num1,num2)
{
    // let result = num1+num2
    // return result
    return num1+num2  // this is 3 method
}
const result = addtwonumber(3,4)
console.log("result:",result);

function loginuserMessage(username ="sam")//default case then no need enter ifloop
{
    if(username === undefined)
    {
        console.log("Please enter the user name");
        return
    }
    return `${username} is logged in`
}
// console.log(loginuserMessage("hitesh"));
console.log(loginuserMessage());
//in js empty string and undefined is false string


function calculateCartprice(val1,val2,...num1)
{
    return num1
}
// console.log(calculateCartprice(2));
console.log(calculateCartprice(200,400,600));
//correct this prblm have to use REST operator /SPREAD operator


//object pass through function
const user ={
    username:"himanshi",
    price:200
}
function handleObject(anyobject)
{
    console.log(`username is ${anyobject.username} and pricr is ${anyobject.price}`);
}
handleObject(user)// we dont have compulsory at pass value
// without pass bhi kr sakte hai direct
 handleObject({
    username:"sam",
    price:300
})

//array pass through function
const mynewarr =[200,400,300]
function returnsecondvalue(getarr)
{
    return getarr[2]
}
// console.log(returnsecondvalue(mynewarr));
console.log(returnsecondvalue([200,400,300]));