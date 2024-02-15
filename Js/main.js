


// // **********object literals*************

// const mySym = Symbol('key1')

// const JsUser = {
//     name: "Foysla",
//     [mySym]: "myKey1",
//     "location": "Dhaka,Manikgonj",
//     email: "fh375170@gmail.com",
//     isLoggedIn: false,
//     lastLoginDin: ["Monday" , "Saturday"]
// } 

// console.log(JsUser.email);
// console.log(JsUser['email']);
// console.log(JsUser['location']);
// console.log(JsUser[mySym]);

// JsUser.email = "fh@gmail.com"
// Object.freeze(JsUser)
// JsUser.email = "fHossain@gmail.com"



// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Foysal",
    "fullName": "Foysal Hossain",
    location: "Bangladesh Dhaka Manikgonj",
    [mySym]: "myKey1",
    email: "fh@gail.com",
    isLoggedIn: "false",
    lastLoginDays: ["Monday" , "Saturday"]
}   

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["fullName"]);
// console.log( JsUser[mySym]);

JsUser.email = "fh@gail.com"
// Object.freeze(JsUser)
JsUser.email = "Tomal@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello js User");
}

JsUser.greetingTwo = function(){
    // console.log(`Hello js User, ${this.name}`);
}

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

// // **********object literals************* end





// const tinderUser = new Object() ###this is method singleton Object
// const tinderUser = {} ##this is none singleton object

const tinderUser = {}
tinderUser.id = 123,
tinderUser.name = "some",
tinderUser.email = "fh375170@gmail.com",
tinderUser.isLoggedIn = true
// console.log(tinderUse);

const regularUser = {
    email: "SomeOne@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Foysal",
            lastName: "Hossain"
        }
    }
}

// console.log(regularUser.fullName.userFullName);

const obj1 = {1: 'a' ,2: 'b'}
const obj2 = {3: 'a' ,4: 'b'}
const obj3 = {5: 'a' ,6: 'b'}

const obj4 ={...obj1, ...obj2} 
// console.log(obj4);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty('isLoggedIn'));





