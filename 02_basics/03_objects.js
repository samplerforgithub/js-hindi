// literals se declare krenge to singleton nhi bnta hai, constructor se krenge to bnega

//object.literals//(declaration way of object)
// object.create//(constructor method)
const mysym = Symbol("key")
const JsUser = {
    name: "HImanshi",
    age:18,
    Location:"jaipur",
    Email : "himasnhi@gmail.com",
    ["Full name"]: "Himanshi singh",
    [mysym] : 'mykey1'
}
//object access
// console.log(JsUser.Email);
// console.log(JsUser["Email"]);
// console.log(JsUser[mysym]);

//change values
JsUser.Email = "Himanshi@google.com"
// Object.freeze(JsUser)
JsUser.Email ="hitesh@gamil.com"
// console.log(JsUser);

// FUNCTIONS( function ko variable ke tarah se treat krte hai)
// JsUser.greeting = Function()
{
     console.log("Hello sir");
}
// console.log(JsUser.greeting());

JsUser.greetingTwo =function(){
    console.log(`Hello sir,${this.name}`);
}
console.log(JsUser.greetingTwo());

