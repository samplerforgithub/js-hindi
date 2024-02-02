//FOR LOOPS, for loop, for of loop, for in loops, while loop, do_while loops.
//for in :- loops through the keys of an object
//for of:- loops through the values of an object
//while loop:- loops a block based on aspecific condition

for(let i=0; i<34; i++){
    consle.log(i+1);} //35
    
    //program to add first natural number
    let sum=0
    let n=prompt("Enter the value of n")
    n=Number.parseInt(n)
    for(let i=1; i<=n; i++)
    { sum=sum+i;
    console.log(i);
    }
    console.log(sum);
    
    //factorial program
    let sum=1
    let n=prompt("Enter the value of n")
    n=Number.parseInt(n)
    for(let i=1; i<=n; i++){
    sum=sum*i;}
    console.log(sum);
    
    //FOR IN loops...........
    
    let obj={
    harry: 90,
    shubh:89,
    shivika:78,
    ritika:67,
    shiv:34}
    
    for(let a in obj){
    console.log("marks of"+a+"are"+obj[a])}
    
    //FOR OF loops..............
    
    //iterable
    for(let b of "Harry"){
    console.log(b)}
    
    //While loops.........
    
    let a= prompt("what is your age?")
    a= Number.parseInt(a)
    
    let i=0;
    while(i<n){
    console.log(i);
    i++;}
    
    //do-while loop........
    let a= prompt("what is your age?")
    a= Number.parseInt(a)
    
    let i=0;
    do{
    console.log(i);
    i++;}
    while(i<n)
    //while and do-while one example
    