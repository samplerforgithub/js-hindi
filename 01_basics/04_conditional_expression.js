// //conditional statement has 3 types
// //if statement, if...else statement, if...else if...else statement

// //PROMPT- always string, doing question 
// let a= prompt("Hey whats your age?");

// a=Number.parseInt(a); // converting the string to a number
// // let a= "45"
// console.log(a);

// //ALERT is saying...
// if(a<0)
// {
//     alert("This is an invalid age");
// }

// else if(a<9){
//     alert("you are a kid you can not drive");
// }

// else{
//     alert("this is valid age");
// }

//explore switch statement and write a basic program 

let s= "banana";

switch(s)
{
    case "papaya":
        console.log("Papaya is good");
        break;

        case "guava":
            console.log("guava is good fruit");
            break;

            case "banana":
                console.log("this is the national fruit");
                break;

                default:
                    console.log("this is not good fruit");

}

//TERNARY OPERATOR

//condition ? "yes" : "no"

console.log("you can", "drive");
console.log("you can", (a<18? "not drive": "drive"));