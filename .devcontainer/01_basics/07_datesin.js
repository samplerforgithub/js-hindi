//Dates Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).

let myDate = new Date()
//methods
// console.log(myDate.toString());//Sat Jan 06 2024 09:37:21 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toLocaleString());//1/6/2024, 9:37:21 AM
// console.log(myDate.toJSON());//2024-01-06T09:37:21.433Z
// console.log(myDate.toDateString());//Sat Jan 06 2024
// console.log(myDate.toISOString());//2024-01-06T09:37:21.433Z
// console.log(myDate.toLocaleDateString());//1/6/2024
// console.log(myDate.toTimeString());//09:37:21 GMT+0000 (Coordinated Universal Time)

// console.log(typeof myDate);// dates in js are object

//month always start with 0
//let myCreatedDate = new Date(2023 , 0 , 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
//IN THISS type month started with 1
// let myCreatedDate = new Date("2023-01-23")
let myCreatedDate = new Date("01-14-2023")


// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

//timestamp used for poll or fast reply require
let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
//for compare in second

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getTime());
//month 0 se start hota hai isiliya +1 fo real month
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

//`${newDate.getDay()} and the time 

newDate.toLocaleString('default', { 
    weekday: "long",               // koi bhi object likh sakte hai
})
