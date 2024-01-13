//Imediately Invoked Function Expression(IIFE)
//jo function immediately execute ho jaye
//global scope ke pollution se prblm hoti hai kai ar to global scope ke pollution ya declaration ko hatane ke liye iife use karte hai 
//iife syntax  ()(){}

// function chai(){
//     console.log('DB CONNECTED');
// }
// chai()

(function chai(){
    console.log('DB CONNECTED');
})(); // iife me code ke baad () use krte hai for code run.

//is arrowfunction used in iife ??
//yes, but if two are equivalent run then we have to stop 1 code with (;)

//syntax of arrayfunction in iife ()()=>{}
//arrowfunction ko use krne keliye function keyword ka use nhi karenge
 ( () => {
    console.log('DB CONNECTED TWO');
 })();

 ( (name) => {
    console.log(`DB CONNECTED TWO , ${name}`)
 })('himanshi')