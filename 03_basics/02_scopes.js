//in scope jb bahar koi bhi value likhte hai to wo anddr honi chahiye but scope ke ki value bahar nhi jani chahiye

// var c = 300
//global scope
let a =400
if(true)
{//scope
    let a=10   //local scope
    const b=20
    var c= 30   //confusing
console.log(a);
}
console.log(a);
// console.log(b);
// console.log(c);


//nested scope
function one(){
    const username = "himanshi"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
one()

if(true)
{
    const username = "himanshi"
    if(username === "himanshi")
    {
        const website = "youtube"
        console.log(username+website);
    }
    // console.log(website);
}
// console.log(username);

//*************SOme fact */
console.log(addone(5))

function addone(num){
    return num+1
}

addtwo(5)
const addtwo = function(num){
    return num+2
}