//Basic comparison

//console.log(2>1)
//console.log(2>=1)
//console.log(2<1)
//console.log(2!=1)
//console.log(2==1)

// problem of not comparing same datatypes

console.log("2">1);
console.log("02">1);

console.log(null>0);//false
console.log(null==0);//false
console.log(null>=0);// true

console.log(undefined>0);//false
console.log(undefined==0);
console.log(undefined>=0);

//NOTE:- this type of conversion always generate confusion. so, aviod it.
//=== (strict check)

console.log("2"===2);