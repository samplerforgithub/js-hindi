// for of

//array declaration form
// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

//syntax- for (const iterator of object) {
    
//}

// for (const num of arr) {
//     // console.log(num);
// }

// const greetings = "Hello world!"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`)
// }

// // Maps
//maps known by unique value 
//order maintain

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
// // map.set('IN', "India")
// console.log(map);


//for of loop on itterator
//if you dont want together value then destructure the array with [key,value]

// for (const [key, value] of map) {
//     console.log(key, ':-', value);
// }

//for of loop on object with map

//this method is not iterable
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);
    
}