//const tinderuser = new object() (constructor)

const tinderuser = {}
tinderuser.id ="123abc"
tinderuser.name = "sam"
console.log(tinderuser);

//object inside object
const regularuser = {
    email :"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"himanshi",
            lastname:"singh"
        }

    }
}
//access
// console.log(regularuser.fullname.userfullname.firstname.lastname);

//object add
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
//method1
// const obj3 ={obj1, obj2} // wrong method
//method2
// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);
//method3
const obj3 = {...obj1,...obj2}
console.log(obj3);

//database se values array me obj ke form me aati hai
const user =Array
[
    {
        name:"himanshi" ,
        email:'himanshi@gmail.com'
    },
    {
        name:"himanshi" ,
        email:'himanshi@gmail.com'
    },
    {
        name:"himanshi" ,
        email:'himanshi@gmail.com'
    },
    {
       name:"himanshi",
        email:'himanshi@gmail.com'
    }
]
//access database
// user[1].email
console.log(tinderuser);
//methods
console.log(Object.keys(tinderuser));//array
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));
// console.log(tinderuser.hasOwnproperty('IsLogged'));

//DESTRUCTURING
const course ={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}
//course.courseInstructor

const{courseInstructor} = course
// console.log(courseInstructor);

const {courseInstructor : Instructor} = course
console.log(Instructor);
//JSON API
