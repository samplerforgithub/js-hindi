// array
//declaration of array

const myArr = [0,1,2,3,4,5]

const myHeros = ["Papa", "mumma"]

const myArr2 = new Array(1,2,3,4,5)
console.log(myArr[3]);
console.log(myArr2[2]);

// IN javascript array are resiable
//SHALLOW COPY of an object is a copy whose properties share the same reference point
//DEEP COPY do not share in same reference

//METHODS AND PROPERTIES

//myArr.push(9)   // add no. in number at increasing order
// myArr.pop()   // delete first no. in array(they dont need any argument)

myArr.unshift(9)   //add no. in array at starting, they dont have proper order
myArr.shift()     // remove no.
// console.log(myArr);

console.log(myArr.includes(9));  //this tells that no. are belong in array or not
console.log(myArr. indexOf(1));

const newArr = myArr.join() //join array ko bind kr deta and convert into stirng
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

//slice, splice
//slice means this not involve last range of no. and also is not manupulate array
///but splice involves last rangr of no. and also manipulate array

console.log("A",myArr);
const myn1 = myArr.slice(0,3)
console.log(myn1);

console.log("B",myArr);
const myn2 = myArr.splice(0,3)
console.log(myn2);
console.log("C",myArr);



