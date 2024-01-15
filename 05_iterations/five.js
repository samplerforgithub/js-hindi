//for-each loop

//direct access of their prototype
const coding = ["js", "ruby", "java", "python"]
// coding.forEach(function (val){
    // console.log(val);
// })

// coding.forEach((item) => {
//     console.log(item);
// })

// function printme(item){
//     console.log(item);
// }
// coding.forEach(printme)


// coding.forEach((item, index, arr) =>{
//     console.log(item, index,arr)
// })

//database always send data in array for 
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )