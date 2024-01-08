const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//add of two arrays
//.push
// marvel_heros.push(dc_heros)  //prblm generate 
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);


//.concat
const allheros = marvel_heros.concat(dc_heros)
// console.log(allheros);

//concat or spread (add array)
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);

const another_arr = [1,2,3, [4,5,6],7,[6,7,[4,5]]]
const real_another_arr = another_arr.flat(Infinity)
//flat (sare arrays ko yek list me krta hai)
console.log(real_another_arr);

//construct arrays
// console.log(Array.isArray("Himanshi"))
// console.log(Array.from("HImanshi"))
// console.log(Array.from({name:"Himanshi"}))

//converet into array

let score = 100
let score1 =200
let score3 =300
console.log(Array.of(score,score1,score3));
